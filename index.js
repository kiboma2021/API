const get_url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function getData () {
  const response = await fetch(get_url);
  const data = await response.json();
  console.log(data)
}
getData();