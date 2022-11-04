const mongoose = require('mongoose');

const mangaSchema = new mongoose.Schema({
    "id": {
      "type": "Number"
    },
    "cover": {
      "type": "String"
    },
    "image": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    },
    "data": {
      "title": {
        "type": "String"
      },
      "desc": {
        "type": "String"
      },
      "reviews": {
        "type": [
          "Mixed"
        ]
      }
  }
})

module.exports = mongoose.model('manga', mangaSchema)
