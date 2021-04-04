const githubRepo = document.querySelector(".githubrepo");
const repoName = document.querySelector(".repo-name");
// Arrays to stock data.
const repoArr = [];
const repoUrl = [];
const repoDesc = [];

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

    // Loop over each object in data array
    for (let i in data) {
      const newrepoDiv = document.createElement("div");
      const newRepo = document.createElement("a");
      const newDesc = document.createElement("a");
      // Stock data into arrays
      repoArr.push(data[i].name);
      repoUrl.push(data[i].svn_url);
      repoDesc.push(data[i].description);
      // Create divs
      repoArr.map((e) => {
        const arrayNamesRepos = [e.toString().replaceAll("-", " ")];
        newRepo.innerHTML = arrayNamesRepos;
      });
      githubRepo.appendChild(newrepoDiv);
      newrepoDiv.classList.add("newrepoDiv");
      // Create a card of each repo with URL/Title and the description
      newRepo.classList.add("newRepo");
      newRepo.target = "_blank";
      //URL
      newRepo.href = repoUrl[i];
      //Desc
      newDesc.innerHTML = repoDesc[i];
      newDesc.classList.add("newDesc");
      // Make it appends to the main div (card)
      newrepoDiv.appendChild(newRepo);
      newrepoDiv.appendChild(newDesc);
    }
  };

  // Send the request to the server
  xhr.send();
}
// Get the wanted user with his username in Github.
requestUserRepos("Jintarq");
