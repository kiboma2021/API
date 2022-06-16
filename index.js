function getGithubOrgs(url) {
  return fetch(url).then((response) => response.json());
}

getGithubOrgs("https://reqres.in/api/users")
  .then((data) =>
  console.log(data)
);