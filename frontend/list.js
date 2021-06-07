const memesList = document.getElementById("memes");

function displayMemes(data) {
  const memes = [];
  for (let meme of data) {
    const memeEl = document.createElement("li");
    memeEl.className = "meme-el";
    memeEl.innerHTML = `<div>
    <p>Name: ${meme.name}</p>
    <p>URL: ${meme.url}</p>
    <p>Caption: ${meme.caption}</p>
    <img alt="meme pic" src="${meme.url}" />
    </div>`;

    memesList.appendChild(memeEl);
    // memes.push(memeEl);
  }
}

window.addEventListener("load", () => {
  console.log("here");
  fetch("http://localhost:5000/api/memes", { method: "GET" })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      displayMemes(res.data);
    })
    .catch((err) => {
      console.error(err);
      alert("Oops! There was some error.");
    });
});

document.onload((e) => {
  e.preventDefault();
  console.log("here");
  fetch("http://localhost:5000/api/memes", { method: "GET" })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      displayMemes(res.data);
    })
    .catch((err) => {
      console.error(err);
      alert("Oops! There was some error.");
    });
});
