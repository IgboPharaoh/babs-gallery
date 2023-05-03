import axios, { AxiosResponse } from 'axios';
import { RANGE } from '../utils';
import { toastResponse } from '../utils/toastUtils';

const Axios = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
});

Axios.interceptors.response.use(function (value) {
    if (value.status >= 400) {
        switch (value.status) {
            case 400:
                toastResponse('An error occured', 'There seems to an error with your request, please try again');
                break;
            case 404:
                toastResponse('An error occured', "We might not have what you're looking for");
                break;
            case 500:
                toastResponse('An error occured', 'Please try using the applicatin again');
                break;
            default:
                toastResponse('An error occured', 'There seems to an error with your request, please try again');
                break;
        }

        return { data: { photos: [] } } as AxiosResponse;
    }

    return value;
});

export const API = async (args: string, page: number) => {
    if (!args.length) {
        return;
    }

    if (!args && args.length > RANGE) {
        return;
    }

    const params = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_API_KEY as string,
        },
    };

    try {
        const response: AxiosResponse = await Axios.get(`search/?page=${page}&query=${args}&per_page=10`, params);
        if (response.status === 200) {
            const { data } = response;
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};
