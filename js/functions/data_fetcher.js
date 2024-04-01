import Config from "../../config.js";

export default class DataFetcher {
    #Data = [];
    #config = new Config();

    searchByID(id) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${this.#config.getToken()}`
            }
        };
        
        fetch(`https://api.themoviedb.org/3/collection/${id}?language=en-US&api_key=${this.#config.getApiKey()}`, options)
            .then(response => response.json())
            .then(response => this.#Data.push(response))
            .catch(err => console.error(err));

        return this.#Data;
    }

    searchImgByID(id) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${this.#config.getToken()}`
            }
        };
        
        fetch(`https://api.themoviedb.org/3/collection/${id}/images?language=en-US&api_key=${this.#config.getApiKey()}`, options)
            .then(response => response.json())
            .then(response => this.#Data.push(response))
            .catch(err => console.error(err));
        
        return this.#Data;
    }

    // QUERYS
    // https://developer.themoviedb.org/reference/collection-images
}
