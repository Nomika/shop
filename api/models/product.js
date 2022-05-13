const mongoose = require('mongoose');

const produstSchema = mongoose.Schema ({
    _id: mongoose.Types.ObjectId,
    name: String,
    proce: Number
})

module.exports = mongoose.model("Product", productSchema);
