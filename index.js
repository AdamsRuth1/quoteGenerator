const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The only way to do great work is to love what you do. - Steve Jobs",
"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
"Your time is limited, don't waste it living someone else's life. - Steve Jobs",
"Believe you can and you're halfway there. - Theodore Roosevelt",
"Strive not to be a success, but rather to be of value. - Albert Einstein",
"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie",
"The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
"The best way to predict the future is to invent it. - Alan Kay",
"Code is like humor. When you have to explain it, it's bad. - Cory House",
"The most dangerous phrase in the language is, 'We've always done it this way.  - Grace Hopper",
]
let quoteView = document.getElementById("quote")


document.getElementById("generator").onclick =  function(){
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];
    quoteView.innerHTML = '"' + randomQuote + '"';
    
}