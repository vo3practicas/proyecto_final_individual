export default class Config {
    #TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjU4MDE5NTYzMzE5MDIyMzNjODJjNWEzZmIzYzJjMCIsInN1YiI6IjY2MGFlMWM0YzhhNWFjMDE3Yzc4NzdkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vJUHYSgK3sLgyiD_lwnCeHfV6f9QxVcolPWs3OtLx_8";
    #API_KEY = "425801956331902233c82c5a3fb3c2c0";

    constructor() {}

    getToken() {
        return this.#TOKEN;
    }

    getApiKey() {
        return this.#API_KEY;
    }
}