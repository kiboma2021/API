/*console.log(fetch('https://reqres.in/api/users'))
  .then(res => {
    if(res.ok) {
      console.log("Sucess")
    } else {
      console.log("Failed")
    }
  })
//    res.json())
  //.then(data => console.log(data))*/

function getGithubOrgs(url) {
  return fetch(url).then((response) => response.json());
}

getGithubOrgs("https://reqres.in/api/users").then((res) =>
  console.log(res)
);