let randombtn = document.querySelector("#random");
let copybtn = document.querySelector("#copybtn");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

function fetchdata() {
  let apiUrl='https://api.api-ninjas.com/v1/quotes';
  let apiKey='MSecLBiRtNo8UUT/OxdhgQ==c4GjUCYGvOqPuwvg';
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      display(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
}

function display(data) {
  
  author.innerHTML = `${data[0].author}`;
  quote.innerHTML = `"${data[0].quote}"`;
  let tag = document.querySelector("#tags");
  tag.innerHTML = ` <p class="px-3 py-1 border-[1px] text-[10px] font-semibold tracking-wide text-[#6466E9] border-[#6466E9] rounded-full ">${data[0].category}</p>`
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
