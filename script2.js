btnEl = document.getElementById("btn");
jokeEl = document.getElementById("joke");

const apikey = "AlHGN62FFW+twS1303ooWQ==ehnYH0zxgujEBscF";

const options = {
  method: "GET",
  headers: {
    "X-Api-key": apikey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  jokeEl.innerText = "Updating...";
  btnEl.innerText = "Loading...";
  const response = await fetch(apiURL, options);
  const data = await response.json();
  jokeEl.innerText = data[0].joke;
  btnEl.innerText = "Tell me a Joke";
}

btnEl.addEventListener("click", getJoke);
