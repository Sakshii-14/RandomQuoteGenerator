let randombtn = document.querySelector("#random");
let copybtn = document.querySelector("#copybtn");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

function fetchdata() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      display(data);
    })
    .catch(error => {
      console.log(error)
    })

}

function display(data) {
  console.log("inside display", data);
  author.innerHTML = `${data.author}`;
  quote.innerHTML = `"${data.content}"`;
  console.log(data.tags);
  let html = data.tags.map(elem => {
    return `
    <p class="px-3 py-1 border-[1px] text-[10px] font-semibold tracking-wide text-[#6466E9] border-[#6466E9] rounded-full ">${elem}</p>
    `
  })
  let tag = document.querySelector("#tags");
  tag.innerHTML = html.join('');
}

function copyquote() {
  let textToCopy=quote.innerHTML;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert('Text copied to clipboard: ' + textToCopy);
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });
}

window.addEventListener('load', fetchdata);
randombtn.addEventListener('click', fetchdata);
copybtn.addEventListener('click', copyquote); 