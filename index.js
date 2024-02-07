const quotes = [
    { 
        text: "The only way to do great work is to love what you do.", 
        author: "Steve Jobs", 
    },
    { 
        text: "The only way to do great work is to love what you do.", 
        author: "Steve Jobs", 
    },
    { 
        text: "The only way to do great work is to love what you do.", 
        author: "Steve Jobs", 
    },
    { 
        text: "The only way to do great work is to love what you do.", 
        author: "Steve Jobs", 
    },
    { 
        text: "The only way to do great work is to love what you do.", 
        author: "Steve Jobs", 
    },
    { 
        text: "Strive not to be a success, but rather to be of value", 
        author: "Albert Einstein", 
    },
    { 
        text: "Believe you can and you're halfway there", 
        author: "Theodore Roosevelt", 
    },
    { 
        text: "Your time is limited, don't waste it living someone else's life", 
        author: "Steve Jobs", 
    },
    { 
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts", 
        author: "Winston Churchill", 
    },
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
    },
    {
        text: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
        author: "Anonymous",
    },
    {
        text: "It’s harder to read code than to write it.",
        author: "Joel Spolsky",
    },
    {
        text: "Before software can be reusable it first has to be usable.",
        author: "Ralph Johnson",
    },
    {
        text: "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
        author: "Larry Niven",
    },
    {
        text: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
        author: "Mosher’s Law of Software Engineering",
    },
    {
        text: "In theory, there is no difference between theory and practice. But, in practice, there is.",
        author: "Jan L. A. van de Snepscheut",
    },
    {
        text: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
        author: "Antoine de Saint-Exupery",
    },
    {
        text: "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
        author: "Martin Fowler",
    },
    {
        text: "Software and cathedrals are much the same — first we build them, then we pray.",
        author: "Sam Redwine",
    },
    {
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman",
    },
    {
        text: "The most disastrous thing that you can ever learn is your first programming language.",
        author: "Alan Kay",
    },
    {
        text: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
        author: "Linus Torvalds",
    },
    {
        text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        author: "Edsger Dijkstra",
    },
    {
        text: "Programming is not a zero-sum game. Teaching something to a fellow programmer doesn't take it away from you. I'm happy to share what I can because I'm in it for the love of programming.",
        author: "John Carmack",
    },
    {
        text: "The only way to learn a new programming language is by writing programs in it.",
        author: "Dennis Ritchie",
    },
    {
        text: "I'm not a great programmer; I'm just a good programmer with great habits.",
        author: "Kent Beck",
    },
    {
        text: "If you want to set off and go develop some grand new thing, you don't need millions of dollars of capitalization. You need enough pizza and Diet Coke to stick in your refrigerator, a cheap PC to work on, and the dedication to go through with it.",
        author: "John Carmack",
    },
    {
        text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        author: "John Woods",
    },
    {
        text: "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
        author: "Andrew Hunt and David Thomas",
    },
    {
        text: "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
        author: "Alan Kay",
    },
    {
        text: "One of the best programming skills you can have is knowing when to walk away for a while.",
        author: "Oscar Godson",
    },
    {
        text: "Walking on water and developing software from a specification are easy if both are frozen.",
        author: "Edward V Berard",
    },
    {
        text: "A programming language is low level when its programs require attention to the irrelevant.",
        author: "Alan J. Perlis",
    },
    {
        text: "There are only two kinds of programming languages: those people always bitch about and those nobody uses.",
        author: "Bjarne Stroustrup",
    },
    {
        text: "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.",
        author: "Randall E. Stross",
    },
    {
        text: "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
        author: "Seymour Cray",
    },
    {
        text: "The most important single aspect of software development is to be clear about what you are trying to build.",
        author: "Bjarne Stroustrup",
    },
    {
        text: "Every programmer is an author.",
        author: "Sercan Leylek",
    },
    {
        text: "Truth can only be found in one place: the code.",
        author: "Robert C. Martin",
    },
    {
        text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        author: "Rick Osborne",
    },
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House",
    },
    {
        text: "A language that doesn't affect the way you think about programming is not worth knowing.",
        author: "Alan Perlis",
    },
    {
        text: "I'm not a great programmer; I'm just a good programmer with great habits.",
        author: "Kent Beck",
    },
    {
        text: "One man's crappy software is another man's full-time job.",
        author: "Jessica Gaston",
    },
    {
        text: "Code is read much more than it is written.",
        author: "Guido van Rossum",
    },
    {
        text: "It’s all talk until the code runs.",
        author: "Ward Cunningham",
    },
    {
        text: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
        author: "Rick Cook",
    }

]
let quoteView = document.getElementById("quote")
let authorView = document.getElementById("author")

document.getElementById("generator").onclick =  function(){
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];
    quoteView.innerHTML = '"' + randomQuote.text + '"';
    authorView.innerHTML = '' + randomQuote.author + '';
   
};
    