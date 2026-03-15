import React from "react";

// Sample news data
const news = [
  {
    title: "Breaking News: Ethiopia Launches New Project",
    description: "A new development project has been launched in Addis Ababa.",
    link: "#",
  },
  {
    title: "Tech Update: AI in Ethiopia",
    description: "Local tech startups are adopting AI for business solutions.",
    link: "#",
  },
  {
    title: "Sports: Local Football League Highlights",
    description: "Highlights from the latest football league matches.",
    link: "#",
  },
];

function Landing() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Fasika News</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">World</a>
          <a href="#" className="hover:underline">Tech</a>
          <a href="#" className="hover:underline">Sports</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 p-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome to Fasika News</h2>
        <p className="text-gray-700 mb-4">
          Stay updated with the latest news from Ethiopia and around the world.
        </p>
        <a
          href="#latest-news"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          See Latest News
        </a>
      </section>

      {/* Latest News */}
      <section id="latest-news" className="p-8">
        <h3 className="text-2xl font-bold mb-4">Latest News</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="border rounded shadow p-4 hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <a
                href={item.link}
                className="text-blue-600 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Fasika News. All rights reserved.
      </footer>
    </div>
  );
}

export default Landing;