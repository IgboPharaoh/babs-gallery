import { AlbumArray, Photo } from '../interfaces';

export const trimDescription = (args: string) => {
    if (args.length > 112) {
        return `${args.substring(0, 110)}.....`;
    }
    return args;
};

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

export const albumSetArray = (args: Photo[]): AlbumArray[] => {
    return args?.map((photo) => {
        const width = photo.width * 4;
        const height = photo.height * 4;
        return {
            src: photo.src.medium,
            width,
            height,
            srcSet: breakpoints.map((breakpoint) => {
                const breakpointHeight = Math.round((height / width) * breakpoint);
                return {
                    src: photo.src.medium,
                    width: breakpoint,
                    height: breakpointHeight,
                };
            }),
            title: photo.photographer,
            description: photo.alt,
        };
    });
};

export const discover = (): string => {
    const arr = ['super cars', 'houses', 'oceans', 'computer', 'cartoon', 'anime', 'tractors'];

    let randomNumber = Math.floor(Math.random() * 7);
    return arr[randomNumber];
};

