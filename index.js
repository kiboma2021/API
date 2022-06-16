function getGithubOrgs(url) {
  return fetch(url).then((response) => response.json());
}

getGithubOrgs("https://reqres.in/api/users", {
  method: 'POST',
  body: JSON.stringify({
    name: 'User 1'
  })
}).then((res) => {
  return res.json()
});