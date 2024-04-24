import axios, {  AxiosInstance } from "axios";

export type UseApiResponse = {
    api: AxiosInstance;
}

export default function useApi(secure = false): UseApiResponse {
    let api = axios.create({ baseURL: 'https://restihp.ironhold.net/rest-api'});

    if(secure) {
        // Handle token
        api = axios.create({ baseURL: 'https://restihp.ironhold.net/rest-api'});
    }
    return { api };
}