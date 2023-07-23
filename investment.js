var parameters = {
  target: 'myGraph',
  data: [{
    fn: 'sin(x)', 
    color: 'red'
 }],
  grid: true,
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [0, 2*Math.PI]}
};

function plot() {
  var f = document.querySelector("#function").value;
  var xMin = document.querySelector("#xMin").value;
  var xMax = document.querySelector("#xMax").value;
  var yMin = document.querySelector("#yMin").value;
  var yMax = document.querySelector("#yMax").value;
  var color = document.querySelector("#color").value;
  
  parameters.data[0].fn = f;
  parameters.xAxis.domain = [xMin, xMax];
  parameters.yAxis.domain = [yMin, yMax];
  parameters.data[0].color = color;

  functionPlot(parameters)
}

function getLocation(e) { 
  e.preventDefault();
  if (!navigator.geolocation) {
    alert("Browser doesn't support geolocation");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

// Get current position successfully
function success(position) {
  var map, marker,
      latitude = position.coords.latitude,
      longitude = position.coords.longitude;
  
  // Instance map using leaflet
  map = L.map('map').setView([latitude, longitude], 13);
  
  // Tile layer using key api at cloudmade.com
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    key: '760506895e284217a7442ce2efe97797',
    styleId: 103288,
    maxZoom: 16
  }).addTo(map);

  // Marker using leaflet
  marker = L.marker([latitude, longitude]).addTo(map);

  // Popup in leaflet
  marker.bindPopup('<p>Your location</p>').openPopup();
}

// Get current position fail
function error() {
  alert('Get current position fail. Please access codepen to get geolocation.');
}

  //webcam
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
  }).then(function(stream) {
    var video = document.createElement('video');
    document.body.appendChild(video);
    video.srcObject = stream;
    video.play();
  }).catch(err => {
    console.log(err)
  })


addEventListener('click', function(evt){
  alert("click");
});
  
