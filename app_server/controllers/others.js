// app_server/controllers/others.js

// About page
module.exports.about = function(req, res) {
    res.render('generic-text', { title: 'About' }); // Render the 'generic-text' template with a title
};

// Travel Itinerary page
module.exports.itinerary = function(req, res) {
    res.render('travel-itinerary', { title: 'Travel Itinerary' }); // Render the 'itinerary' template with a title
};
