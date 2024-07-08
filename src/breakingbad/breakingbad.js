

/**
 * @returns {Promise} quote
 */
const fetchQuote = async() => {
    const url = 'https://api.breakingbadquotes.xyz/v1/quotes';
    const res = await fetch(url);
    // console.log(res);

    const data = await res.json();

    // console.log(data);

    // console.log(data[0]);
    return data[0];

};

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBad = async(element) => {
    console.log('Hola Mundo');
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = `Loading...`;
    // const quote = await fetchQuote();
    // element.innerHTML = `Author: ${quote['author']} <br />Quote: ${quote['quote']}`;

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';
    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = `Loading...`;
        const quote = await fetchQuote();
        renderQuote(quote);
    });


    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    fetchQuote().then( renderQuote);

};