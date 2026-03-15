// controllers/newsController.js

const News = require('../models/News'); // News Mongoose model

// Get all news
exports.getAllNews = async (req, res) => {
  try {
    const newsList = await News.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(newsList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching news' });
  }
};

// Get single news by ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching news' });
  }
};

// Create a new news item
exports.createNews = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const newNews = new News({
      title,
      content,
      author,
      createdAt: new Date(),
    });

    const savedNews = await newNews.save();
    res.status(201).json(savedNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while creating news' });
  }
};

// Update a news item
exports.updateNews = async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );

    if (!updatedNews) {
      return res.status(404).json({ message: 'News not found' });
    }

    res.status(200).json(updatedNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while updating news' });
  }
};

// Delete a news item
exports.deleteNews = async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);
    if (!deletedNews) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json({ message: 'News deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while deleting news' });
  }
};