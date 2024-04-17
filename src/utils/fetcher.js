import axios from 'axios';

export const fetcherGet = async (url) => {

    return await axios.get(url);

}

export const fetcherPost = async (url, config) => {

    // return await axios.get(url);

}