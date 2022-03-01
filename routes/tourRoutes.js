const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
} = require('../controllers/tourController');

const router = express.Router();
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

//Create a checkBody middleware
//Check if body contains the name and price property
// if not, send back 400 (bad request)
// Add it to the post handler stack

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
