import DataFetcher from "./functions/data_fetcher.js";

document.addEventListener("DOMContentLoaded", async () => {
    const dataFetcher = new DataFetcher();
    const data = await dataFetcher.get_data();

    document.write(`${data}`)
});
