mapboxgl.accessToken = 'pk.eyJ1IjoiZGVzaDE5OTIiLCJhIjoiY2tqamRzaWd0OGMzeTMwbHJ4eGVoODY4MyJ9.N-9yedpS1MhU2uth79ZEZw';

navigator.geolocation.getCurrentPosition(sucessLocation, errorLocation, {
	enableHighAccuracy: true
})

function sucessLocation(position) {
	setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
	setupMap([-2.24, 53.48])
}

function setupMap(center) {
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: center,
		zoom: 15
	});

	const nav = new mapboxgl.NavigationControl();
	map.addControl(nav);

	var directions = new MapboxDirections({
		accessToken: mapboxgl.accessToken
	});

	map.addControl(directions, 'top-left');
}

