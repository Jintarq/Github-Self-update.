const githubRepo = document.querySelector(".githubrepo");
const repoName = document.querySelector(".repo-name");
const repoArr = [];
const repoUrl = [];

function requestUserRepos(username) {
  // Create new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // GitHub endpoint, dynamically passing in specified username
  const url = `https://api.github.com/users/${username}/repos`;

  // Open a new connection, using a GET request via URL endpoint
  // Providing 3 arguments (GET/POST, The URL, Async True/False)
  xhr.open("GET", url, true);

  // When request is received
  // Process it here
  xhr.onload = function () {
    // Parse API data into JSON
    const data = JSON.parse(this.response);

    // Log the response
    console.log(data);

    // Loop over each object in data array
    for (let i in data) {
      // Log the repo name
      console.log("Repo:", data[i].name);
      repoArr.push(data[i].name);
      console.log(repoArr);
      repoUrl.push(data[i].svn_url);
      console.log(repoUrl);
    }
    // For each element, create a div and stock him in a "a" element
    repoArr.forEach((element) => {
      const newrepoDiv = document.createElement("div");
      githubRepo.appendChild(newrepoDiv);
      newrepoDiv.classList.add("newrepoDiv");
      const newRepo = document.createElement("a");
      newrepoDiv.appendChild(newRepo);
      newRepo.innerHTML = element;
      newRepo.classList.add("newRepo");
      newRepo.target = "_blank";
      repoUrl.forEach((e) => {
        newRepo.href = e;
      });
    });
  };

  // Send the request to the server
  xhr.send();
}
// Choose the username you want
requestUserRepos("Jintarq");
