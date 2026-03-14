// userController.js
const users = []; // Temporary in-memory storage; replace with DB in production
let idCounter = 1;

// Get all users
const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

// Get a single user by ID
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
};

// Create a new user
const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ message: "Name and email are required" });

  const newUser = {
    id: idCounter++,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Update a user
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) return res.status(404).json({ message: "User not found" });

  if (name) user.name = name;
  if (email) user.email = email;

  res.status(200).json(user);
};

// Delete a user
const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users.splice(index, 1);
  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};