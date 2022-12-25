console.log('client side javascipt!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const  messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = '' 


/* Preventing the default action of the browser. */
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
/* Displaying the loading message on the browser. */

    messageOne.textContent = 'Loading...'
    messageTwo .textContent = ''

  /* The above code is fetching the data from the server and displaying it on the browser. */
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error 
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    }) 
})
})