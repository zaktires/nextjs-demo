import fetch from 'isomorphic-unfetch'

import { SERVER_ENDPOINT } from '~/constants';


export const fetcher = async (url = null, options = {}) => {
    if (!url) {
        console.error('fetcher: no url provided');
        return {};
    }

    const res = await fetch(url, options)
    const data = await res.json()

    if (data.error && res) {
      res.statusCode = 404;
    }

    return data;
}

/* Urls */


/* API Calls */



export const getSeoRoutes = async (url_slug) => {
    const url = `${SERVER_ENDPOINT}/getSeoRoutes?url_slug=/${url_slug}`;
    return await fetcher(url);
}
