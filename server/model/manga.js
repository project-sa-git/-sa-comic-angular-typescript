const mongoose = require('mongoose');

const mangaSchema = new mongoose.Schema({
  {
    id: Number,
    cover: String,
    image: String,
    price: Number,
    data: any,
    reviews: any
  },
    // data: {
    //   title: "Slam Dunk",
    //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eligendi voluptatum culpa quidem libero tenetur odit. Culpa laboriosam nostrum, ex asperiores provident et est ad, officia eveniet illo possimus inventore! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nunc id diam semper lacinia et sit amet urna. Morbi volutpat, erat eu malesuada suscipit, lorem ante mattis risus, at efficitur tellus arcu nec tellus. Aliquam semper magna turpis, in feugiat magna dictum eu. Nam sit amet placerat mi. Morbi eget urna lacus. Suspendisse ornare interdum magna. Sed neque velit, semper quis aliquam ut, tempus eu justo. Morbi finibus eu odio sed posuere. Praesent ac finibus odio. Suspendisse tincidunt justo a dui efficitur, et tristique lorem porttitor. Sed ut leo luctus, tempor ante quis, dapibus elit. In consectetur vestibulum ullamcorper. Donec imperdiet et arcu vel eleifend.",
    //   reviews: [
    //     { name: "Sayed Rafi", desc: "Sugoi desu ne!!!" },
    //     { name: "Sai", desc: "Genius!!!" },
    //   ],
    // },
})

module.exports = mongoose.model('manga', mangaSchema)
