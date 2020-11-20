// console.log the js file working

console.log("test");

// add some arbitrary co ords
let coords = [
	[15.32962, 48.2271],
	[7.749117, 46.020714],
];

// drawing the map. show the documentation and how to navigate it

// generate the access token from mapbox.com
mapboxgl.accessToken =
	"pk.eyJ1IjoidGltYm90aW1iZXIiLCJhIjoiY2s2Z2s1aTU0MHltMzNrcXB3bjlnYWNyYiJ9.14z3LvxL-5ovU8Ur6CuJtw";
//   identify the div the map will be drawn in
const map = new mapboxgl.Map({
	container: "map",
	//   styles can be generated from mapbox.com
	style: "mapbox://styles/timbotimber/ck764n6lm1cgi1imm6ijmxcp8",
	// center: where the map loads first
	center: [13.405, 52.52],
	doubleClickZoom: true,
	zoom: 4.5,
	pitch: 100,
	// this is in the markers and controls section
	options: {
		anchor: "top-left",
	},
});

// demo adding a pop up
const popup = new mapboxgl.Popup({ closeButton: true });
popup.addTo(map);
popup.setLngLat([13.405, 52.52]);
popup.setMaxWidth("400px");
popup.setHTML(
	`<h2>Click here for more info!</h2> <button>see the world</button>`
);

coords.forEach((location) => {
	console.log(location);
	// https://docs.mapbox.com/mapbox-gl-js/api/markers/
	let marker = new mapboxgl.Marker({
		scale: 1,
		draggable: true,
		color: "red",
		rotation: 10,
	});
	marker.setLngLat(location);
	marker.addTo(map);
	// first do the console.log and then do the rest of the stuff
	marker.on("dragend", (data) => {
		console.log("hello? Is it data?", data.target.getLngLat());
		popup.addTo(map);
		popup.setLngLat(data.target.getLngLat());
		popup.setMaxWidth("400px");
		popup.setHTML(
			`<h2>What a location</h2> <h3>location: ${data.target.getLngLat()} </h3>`
		);
	});
});
