(async function () {
    const WORDNIK_API = "https://api.wordnik.com/v4/words.json/randomWord?&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";

    const imageModule = document.getElementsByClassName("image-module")[0];
    const GIFY_API_LIMIT = 1;
    const GIFY_API_KEY = "LIVDSRZULELA";

    const getGif = async (num) => {
        // fetch a random word
        const wordnikResponse = await fetch(`${WORDNIK_API}&minLength=${num}&maxLength=${num}`);
        const wordnikJson = await wordnikResponse.json();
        let randomWord = wordnikJson.word;
        // set url based on the previous fetch response - get word out of it and set
        let giphyAPI = `https://g.tenor.com/v1/search?q=${randomWord}&key=${GIFY_API_KEY}&limit=${GIFY_API_LIMIT}`;

        const giphyAPIResponse = await fetch(giphyAPI);
        const giphyJson = await giphyAPIResponse.json();
        const giphyImgUrl = giphyJson.results && giphyJson.results.length > 0 ? giphyJson.results[0].media[0].mediumgif.url : "";

        return {
            randomWord,
            giphyImgUrl,
        };
    };

    const createImageContainers = (gifResult) => {
        const imageContainer = document.createElement("div");
        imageContainer.setAttribute("class", "img-container");

        const imageHeading = document.createElement("h4");
        imageHeading.textContent = gifResult.randomWord;
        imageContainer.appendChild(imageHeading);

        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", gifResult.giphyImgUrl);
        imageContainer.appendChild(imageElement);

        imageModule.appendChild(imageContainer);
    };

    const gifPromises = [getGif(5), getGif(4), getGif(6)];

    const gifResults = await Promise.all(gifPromises);

    for (let gifResult of gifResults) {
        createImageContainers(gifResult);
    }
})();
