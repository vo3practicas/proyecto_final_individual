import Config from "../../config.js";

export default class DataFetcher {
    #Data = {};
    #config = new Config();

    async get_data() {
        const _base_url_ = "https://api.themoviedb.org/3/movie/";
        const _options_ = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${this.#config.getToken()}`
            }
        };

        let movie_id = "200";
        let page = "1"

        const url = await fetch(`${_base_url_}${movie_id}?page=${page}&api_key=${this.#config.getApiKey()}`, _options_);
        this.#Data = await url.json();

        console.log(this.#Data);

        return this.#Data;
    }
}
