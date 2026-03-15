import React from "react";

const Landing = () => {
  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <h1 style={styles.title}>Welcome to Fasika News</h1>
        <p style={styles.description}>
          Discover the latest news, breaking stories, and trending updates all in one place.
        </p>
        <button style={styles.button}>Explore News</button>
      </section>

      <section style={styles.featuresSection}>
        <div style={styles.card}>
          <h2>Breaking News</h2>
          <p>Get instant access to the most important updates happening right now.</p>
        </div>

        <div style={styles.card}>
          <h2>Top Stories</h2>
          <p>Read featured stories and trending headlines from different categories.</p>
        </div>

        <div style={styles.card}>
          <h2>Stay Connected</h2>
          <p>Follow news updates anytime and stay informed with trusted information.</p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    fontFamily: "Arial, sans-serif",
  },
  heroSection: {
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
    color: "white",
  },
  title: {
    fontSize: "42px",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    maxWidth: "600px",
    margin: "0 auto 30px",
    lineHeight: "1.6",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "white",
    color: "#1d4ed8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  featuresSection: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "50px 20px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "white",
    width: "280px",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Landing;