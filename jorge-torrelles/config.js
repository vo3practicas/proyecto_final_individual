// API WEB https://www.omdbapi.com/

export default class Config {
    #API_KEY = "257f086f";
    #URL = "https://www.omdbapi.com/?";

    constructor() {}

    getURL() {
        return this.#URL;
    }

    getApiKey() {
        return this.#API_KEY;
    }
}