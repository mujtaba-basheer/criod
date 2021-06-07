const nameEl = document.getElementById("name");
const urlEl = document.getElementById("url");
const captionEl = document.getElementById("caption");

function submitHandler(e) {
  e.preventDefault();

  const name = nameEl.value;
  const url = urlEl.value;
  const caption = captionEl.value;

  console.log({ name, caption, url });

  fetch("http://localhost:5000/api/memes", {
    method: "POST",
    body: JSON.stringify({ name, caption, url }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        console.log(res);
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

document.querySelector("form").addEventListener("submit", submitHandler);
