import { HTTP, HTTPS } from "../constants/api";


export const changeHttp = url => {
    return url ? url.replace(HTTP, HTTPS) : url;
}

 export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            return false;
        }

        return await res.json(); 
    } catch (error) {
        return false;
    }
}

export const makeConcurrentRequest = async(urls) => {
    const res = await Promise.all(urls.map(res => {
        return fetch(res).then(res =>res.json())
    }));
    return res;
};


 

