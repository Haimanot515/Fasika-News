// controllers/homeController.js

const News = require('../models/News');
const Blog = require('../models/Blog');

// Get home page data
exports.getHomeData = async (req, res) => {
  try {
    // Get latest 5 news
    const latestNews = await News.find().sort({ createdAt: -1 }).limit(5);

    // Get latest 5 blogs
    const latestBlogs = await Blog.find().sort({ createdAt: -1 }).limit(5);

    // Optional: some statistics
    const totalNews = await News.countDocuments();
    const totalBlogs = await Blog.countDocuments();

    res.status(200).json({
      featuredNews: latestNews,
      featuredBlogs: latestBlogs,
      stats: {
        totalNews,
        totalBlogs
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching home data' });
  }
};