const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'https://placekitten.com/350/350' },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    cuisines: { type: String, required: true },
    founded: {
        type: Number,
        required: true,
        min: [1673, 'Surely not that old?'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!'],
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

module.exports = mongoose.model('Place', placeSchema);
