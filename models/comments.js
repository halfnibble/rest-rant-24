const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' },
});

module.exports = mongoose.model('Comment', commentSchema);
