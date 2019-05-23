const mongoose = require('mongoose');
const schema = mongoose.Schema;

const TaskSchema = new schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('task', TaskSchema);