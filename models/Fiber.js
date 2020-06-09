const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fiber = new Schema({
    geometry: {
        coordinates: {
            type: Array,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    properties: {
        type: {
            type: Object,
            required: true
        }
    },
    type: {
        type: String,
        required: true
    }
}, {
    collection: 'Fiber'
});

Fiber.index({
    geometry: "2dsphere"
});

module.exports = mongoose.model('Fiber', Fiber);