// authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// In-memory users store (replace with DB in production)
const users = [];
let idCounter = 1;

// Secret key for JWT (in production, store in .env)
const JWT_SECRET = "your_secret_key_here";

// ------------------ Register ------------------
const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  // Check if email already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser)
    return res.status(400).json({ message: "Email already registered" });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: idCounter++,
    name,
    email,
    password: hashedPassword
  };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully", user: { id: newUser.id, name, email } });
};

// ------------------ Login ------------------
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Email and password are required" });

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  // Generate JWT
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({ message: "Login successful", token });
};

// ------------------ Middleware: Protect Routes ------------------
const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // attach user info to request
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = {
  register,
  login,
  protect
};