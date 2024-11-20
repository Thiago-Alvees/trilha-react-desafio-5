import axios from 'axios';

export const api  = axios.create({
    baseURL: 'Insura a url do seu banco',
    headers: {
        apikey: 'insira a key do seu banco',
        authorization: 'insura a autorização do seu banco'
    }
})