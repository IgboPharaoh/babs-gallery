import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string | null;
    liked: boolean;
    alt: string | undefined;
    src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
}

export interface Pagination {
    page: number;
    per_page: number;
    photos: Photo[];
    total_results: number;
    next_page: string;
    prev_page: string;
}

export interface AlbumArray {
    src: string;
    width: number;
    height: number;
    srcSet: {
        src: string;
        width: number;
        height: number;
    }[];
    title: string;
    description: string | undefined;
}

export interface SearchInputProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => Promise<Photo[]>;
    isLoading: boolean;
    setSearchTerm: Dispatch<SetStateAction<string>>;
    searchTerm: string;
    setNextPage: Dispatch<SetStateAction<number>>;
}
