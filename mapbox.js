console.log("test");

let coords = [
  [15.32962, 48.2271],
  [7.749117, 46.020714],
];

// draw the map

// generate the access token from map box.com
mapboxgl.accessToken =
  "pk.eyJ1IjoidGltYm90aW1iZXIiLCJhIjoiY2s2Z2s1aTU0MHltMzNrcXB3bjlnYWNyYiJ9.14z3LvxL-5ovU8Ur6CuJtw";
//   identify the div the map will be drawn in
const map = new mapboxgl.Map({
  container: "map",
  //   styles can be generated from mapbox.com
  style: "mapbox://styles/timbotimber/ck764n6lm1cgi1imm6ijmxcp8",
  center: [13.405, 52.52],
  zoom: 4.5,
  pitch: 60,
  options: {
    anchor: "top-left",
  },
});

const popup = new mapboxgl.Popup();
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
    scale: 5,
    draggable: true,
    color: "red",
    rotation: 10,
  });
  marker.setLngLat(location);
  marker.addTo(map);
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
