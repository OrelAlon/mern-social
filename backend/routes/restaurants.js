const router = require("express").Router();
const Restaurant = require("../models/Restaurant");
const bcrypt = require("bcrypt");

// create restaurant
router.post("/", async (req, res) => {
  const newRestaurant = new Restaurant({
    restaurantname: req.body.restaurantname,
    desc: req.body.desc,
    profilePicture: req.body.profilePicture,
  });
  try {
    const savedRestaurant = await newRestaurant.save();
    res.status(200).json(savedRestaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get restaurant
router.get("/", async (req, res) => {
  const restaurantId = req.query.restaurantId;
  const restaurantname = req.query.restaurantname;

  try {
    const restaurant = restaurantId
      ? await Restaurant.findById(restaurantId)
      : await Restaurant.findOne(restaurantname);
    // const { updatedAt, ...other } = restaurant._doc;
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json("error>" + err);
  }
});

module.exports = router;
