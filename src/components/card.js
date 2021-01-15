import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
const headline = document.createElement('div')
const author = document.createElement('div')
const imageContainer = document.createElement('div')
const image = document.createElement('img')
const name = document.createElement('span')

        /////////// APENDING CHILDREN ///////////
card.appendChild(headline)
card.appendChild(author)
author.appendChild(imageContainer)
imageContainer.appendChild(image)
author.appendChild(name)

        /////////// ADDING CLASSES ///////////

card.classList.add('card')
headline.classList.add('headline')
author.classList.add('author')
imageContainer.classList.add('img-container')

///////// TEXT CONTENT /////////
headline.textContent = article.headline
name.textContent = article.authorName
image.src = article.authorPhoto


card.addEventListener('click',()=> {
    console.log(headline.textContent)
})
return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
let cardsContainer = document.querySelector(selector)
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
        
        const data = Object.values(response.data.articles) // converts object into an array

        data.forEach(article => {
            article.forEach(element => {
                let newCard = Card(element)
                cardsContainer.appendChild(newCard)
            })
        })
        
        // ASK ROBERT IF THERES AN EASIER WAY NTO CONVERT IT TO AN ARRATY AND LOOP OVER IT TO RENDER IT
     
})
.catch (error => {
    console.log(error)
    debugger
})
}

export { Card, cardAppender }
