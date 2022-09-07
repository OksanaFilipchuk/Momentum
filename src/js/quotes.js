const quote = document.querySelector('.quote-text')
const author = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');

async function changeQuote (){
    const quotes = 'data.json';
    let res = await fetch(quotes);
    const data = await res.json();
    let randomNumber = Math.floor(Math.random()*(data.length));
    
    quote.textContent = data[randomNumber].text;
    author.textContent = data[randomNumber].author;

}
changeQuoteButton.addEventListener('click', changeQuote)
changeQuote()