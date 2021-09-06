import axios from 'axios';
export const apiURL = "https://main-api.fulhaus.com/fulhaus-tech-test/get-products"

export const apiConfig = {
    timeout: 30000,
    baseURL: apiURL
}

export const api = axios.create(apiConfig)