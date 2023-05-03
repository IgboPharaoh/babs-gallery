import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { API } from '../api/api';
import { Pagination, Photo } from '../interfaces';
import { albumSetArray } from '../utils';
import { toastResponse } from '../utils/toastUtils';

export const useSearchPexels = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [imageCollection, setImageCollection] = useState<Photo[]>([]);
    const [index, setIndex] = useState(-1);
    const [nextPage, setNextPage] = useState(1);

    useEffect(() => {
        const timer: NodeJS.Timer = setTimeout(() => {
            setSearchTerm(searchTerm);
        }, 2000);

        return clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        const getData = async () => {
            if (!searchTerm.length && searchTerm.length === 0) {
                setIsLoading(false);
                Promise.resolve([]);
            }

            if (!searchTerm && searchTerm.length < 3) {
                Promise.resolve([]);
            }

            if (searchTerm.length > 2) {
                try {
                    setIsLoading(true);
                    let photos = [];
                    if (nextPage) {
                        const nextPageData: Pagination = await API(searchTerm, nextPage + 1);
                        console.log(nextPageData);
                        photos = imageCollection.concat(nextPageData.photos);
                        setImageCollection(photos);
                    } else {
                        const data: Pagination = await API(searchTerm, nextPage);
                        photos = data.photos;
                        setImageCollection(photos);
                    }

                    setIsLoading(false);
                    return photos;
                } catch (error) {
                    console.log(error);
                    toastResponse('there seems to be an issue', 'Please try again some other time');
                    throw error;
                }
            }
        };

        getData();
    }, [searchTerm, nextPage]);

    const handleChange = async (event: ChangeEvent<HTMLInputElement>, nextPage?: number): Promise<Photo[]> => {
        event.preventDefault();
        const { value } = event.target;

        setSearchTerm(value);
        setNextPage(nextPage || 0);

        return imageCollection;
    };

    const albumArray = useMemo(() => albumSetArray(imageCollection), [imageCollection]);

    return {
        searchTerm,
        setSearchTerm,
        handleChange,
        imageCollection,
        isLoading,
        albumArray,
        index,
        setIndex,
        setNextPage,
        nextPage,
    };
};
