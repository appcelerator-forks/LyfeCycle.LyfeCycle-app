var Constants = require('/views/Constants');
var MapComponent = require('/views/DirectionComponents/MapComponent');
var RouteListComponent = require('/views/DirectionComponents/RouteListComponent');


function DirectionView() {
	this.view = this.createDirectionView();
}

DirectionView.prototype.createDirectionView = function() {
	var main = Ti.UI.createView({
		width: '100%', height: Constants.viewHeight, bottom: 0
	});

	var routeListComponent = new RouteListComponent();
	var mapComponent = new MapComponent(0);

	main.add(mapComponent.view);
	main.add(routeListComponent.view);

	return main;

	function createBanner(height) {

		var view = Ti.UI.createView({
			width: Constants.deviceWidth,
			height: height,
			top: 0,
			backgroundColor: Constants.green
		});

		var searchButton = Ti.UI.createImageView({
			right: 15,
			height: height*0.6,
			image: '/images/mag_glass.png'
		});

		// view.add(searchButton);

		// Events
		searchButton.addEventListener('click', function() {
			mapComponent.addRouteToMap();
		});

		return view;

	}
};

module.exports = DirectionView;

