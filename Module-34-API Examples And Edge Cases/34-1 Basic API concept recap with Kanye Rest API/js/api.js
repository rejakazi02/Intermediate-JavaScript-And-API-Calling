



const loadQuotes = () => {
    fetch("https://api.kanye.rest")
        .then((response) => response.json())
        .then((data) => displayQuote(data));
};

const displayQuote = (quotes) => {
    console.log(quotes);
    const titleQuote = document.getElementById("quote");

    titleQuote.innerText = quotes.quote;
};



