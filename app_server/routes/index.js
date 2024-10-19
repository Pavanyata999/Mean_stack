var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlothers = require('../controllers/others');
var ctrlmain = require('../controllers/main');

// Existing routes
router.get('/', ctrlLocations.homelist);
router.get('/location1', ctrlLocations.locationInfo1);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location3', ctrlLocations.locationInfo3);
router.get('/review', ctrlLocations.addReview);

router.get('/about', ctrlothers.about);

router.get('/signin', ctrlmain.signin);
router.get('/review', ctrlmain.review);
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'register' });
});

router.get('/itinerary', ctrlothers.itinerary);

module.exports = router;
