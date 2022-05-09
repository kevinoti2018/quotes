const quotes = [
    {
        name:'stephen King',
        quote:'get busy livin or get busy dying.'
    },
    {
        name:'John kennedy',
        quote:'those who dareto miserably failcan acheive greatly.'
    },
    {
        name:'Abraham Lincoln',
        quote:'i am a success today because i hade a friend who beleived in me and i did not have the heart to let him down.'
    },
    {
        name:'Leo Tolstoy',
        quote:'if you want to be happy,be.'
    }

];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random() *quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}