const get_url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function getData () {
  const response = await fetch(get_url);
  const data = await response.json();
  //console.log(data)
  document.getElementById("lat").textContent=data.latitude;
  document.getElementById("lon").textContent=data.longitude;
  document.getElementById("vis").textContent=data.visibility;
}
getData();