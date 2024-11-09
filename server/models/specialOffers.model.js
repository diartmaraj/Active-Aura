const mongoose = require('mongoose');

const specialOfferSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  discount: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  redirectPath: {
    type: String,
    required: true,
    trim: true,
    // This can be a path to a category or a filtered list, like "/shop?category=supplements"
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  filterCriteria: {
    type: Map,
    of: String,
    // Example: { category: 'protein', tags: 'whey' }
    // This allows you to dynamically build filter queries
  }
}, {
  timestamps: true,
});

// Add an index for efficient querying of active offers
specialOfferSchema.index({ endDate: 1, isActive: 1 });

const SpecialOffer = mongoose.model('SpecialOffer', specialOfferSchema);

module.exports = SpecialOffer;
