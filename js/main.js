import DataFetcher from "./functions/data_fetcher.js";

document.addEventListener("DOMContentLoaded", () => {

    const button_submit = document.querySelector("[type='submit']")

    button_submit.addEventListener("click", async (e) => {
        e.preventDefault();
        const dataFetcher = new DataFetcher();
        const data = await dataFetcher.setSearch();
        const content = document.querySelector("._content");
        content.innerHTML = "";

        if (data && data.Title) {
            content.innerHTML = `
                <span>${data.imdbID}</span><br>
                <span><b>Titulo:</b> ${data.Title}</span><br>
                <span><b>Año:</b> ${data.Year}</span><br>
            `;
        } else {
            content.innerHTML = `
                <span><b>Resultado:</b> ${data.Response}</span><br>
                <span><b>Error:</b> ${data.Error}</span><br>
            `;
        }
    })

});
