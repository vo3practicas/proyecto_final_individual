import DataFetcher from "./functions/data_fetcher.js";

document.addEventListener("DOMContentLoaded", async () => {
    const dataFetcher = new DataFetcher();
    const data = await dataFetcher.get_data();
    
    if (data && data.title) {
        document.querySelector("._content").innerHTML = `
            <span><b>Name/Nombre:</b> ${data.title} / ${data.original_title}</span><br>
            <span><b>Homepage:</b> ${data.homepage}</span><br>
            <span><b>Homepage:</b> ${data.homepage}</span><br>
        `;
    } else {
        console.error("No se pudo encontrar el título en los datos.");
    }
});


