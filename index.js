/// Session 4 activity

// function FindName(name) {
//   const nameList = document.getElementById("nameList");
//   const children = nameList.children;
//   const childrenArr = Array.from(children); // only seeing into array

//   for (let i = 0; i < children.length; i++) {
//     const listItem = childrenArr[i];
//     const text = listItem.innerText;

//     if (text === name) {
//       console.log(text, "Yes this name is present");
//       return;
//     }
//     console.log(name, "Not found");
//   }
// }
// FindName("Utkadrsh");

/// Activity  - Quote Kanye! (Session 5 )

function addQuoteToDOM(quote) {
  const bodyElement = document.body;

  const h1Element = document.createElement("h1");
  h1Element.innerText = quote;

  bodyElement.append(h1Element);
}

// function fetchQuote() {
//   const url = "https://api.kanye.rest/";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       const { quote } = data;
//       addQuoteToDOM(quote);
//     })
//     .catch((error) => {
//       addQuoteToDOM("sorry"); /// only this code is catching and with the help addQuoteToDOM it return sorry
//     });
// }
// fetchQuote();

// ----------------- Async Await ---------------------
// Syntatical Sugar

async function quoteKanye() {
  const url = "https://api.kanye.rest/";
  const response = await fetch(url);
  const data = await response.json();

  const { quote } = data;
  addQuoteToDOM(quote);
  return quote;
}

async function getQuote() {
  const quote = quoteKanye();
  console.log(quote);
}
getQuote();

// to seee promis object
// const promiseObject = quoteKanye();
// console.log(promiseObject);
