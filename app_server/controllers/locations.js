module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Travel Buddy - find your destinations!',
        pageHeader: {
            title: 'Travel Buddy',
            strapline: 'Hidden Gems Near You!',
            logo: '/images/logo.jpg'  
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Munnar',
            address: 'Land of nature, South Indian',
            rating: 4,
            facilities: ['Traditional Cuisine', 'Scenic Views', 'Cultural Experience']
            
        }, {
            name: 'Kanya Kumari',
            address: 'Land of varied topography',
            rating: 4,
            facilities: ['Beaches', 'Sunset Views', 'Historical Landmarks']
            
        }, {
            name: 'Gokarna',
            address: 'Varanasi of the South',
            rating: 5,
            facilities: ['Pristine Beaches', 'Temples', 'Yoga Retreats']
            
        }]
    });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'Munnar' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'Kanya Kumari' });
};
module.exports.locationInfo3 = function (req, res) {
    res.render('locations-info3', { title: 'Gokarna' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
}; 