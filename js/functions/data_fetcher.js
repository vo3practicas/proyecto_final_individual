import Config from "../../config.js";

export default class DataFetcher {
    #Data = {};
    #config = new Config();

    setUrlBase() {
        return this.#config.getURL();
    }

    getElementID(id) {
        const element = document.getElementById(id)

        if (element.value) {
            return element.value
        }
    }

    setOptions() {
        const form = document.querySelector("form");
    
        const options = {
            method: form.getAttribute("method"),
            headers: {
                accept: 'application/json'
            }
        };
    
        return options;
    }

    setID() {
        return this.getElementID("movie_id");
    }

    setTitle() {
        return this.getElementID("movie_title");
    }

    setType() {
        return this.getElementID("movie_type");
    }

    setYear() {
        return this.getElementID("movie_year");
    }

    setUrl() {
        let url = `${this.setUrlBase()}`;
    
        if (this.setID()    !== "" && this.setID()    !== undefined) { url += `i=${this.setID()}&` }
        if (this.setTitle() !== "" && this.setTitle() !== undefined) { url += `t=${this.setTitle()}&` }
        if (this.setType()  !== "" && this.setType()  !== undefined) { url += `type=${this.setType()}&` }
        if (this.setYear()  !== "" && this.setYear()  !== undefined) { url += `y=${this.setYear()}&` }
    
        url += `apikey=${this.#config.getApiKey()}`;
    
        return url;
    }

    async setSearch() {

        await fetch(`${this.setUrl()}`, this.setOptions())
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.#Data = response;
            })
            .catch(err => console.error(err));

        return this.#Data;
    }
}
