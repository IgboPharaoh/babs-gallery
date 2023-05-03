import { Box, Button, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import { trimDescription } from './utils';
import { useSearchPexels } from './hooks/useSearchPexels';

import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import './App.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import ErrorHandler from './components/ErrorHandler';

function App() {
    const { handleChange, albumArray, index, setIndex, isLoading, setNextPage, nextPage, searchTerm, setSearchTerm } = useSearchPexels();

    return (
        <div className='App'>
            <Box width='100%'>
                <Box top='0px' pos='sticky' zIndex='100'>
                    <Header
                        setNextPage={setNextPage}
                        handleChange={handleChange}
                        isLoading={isLoading}
                        setSearchTerm={setSearchTerm}
                        searchTerm={searchTerm}
                    />
                </Box>
                <Wrapper>
                    <Box p={{ base: '12px', sm: '24px', md: '24px', lg: '24px' }}>
                        {!albumArray && searchTerm.length >= 3 ? (
                            <ErrorHandler searchTerm={searchTerm} />
                        ) : (
                            <PhotoAlbum
                                layout='rows'
                                photos={albumArray}
                                targetRowHeight={300}
                                onClick={({ index }) => setIndex(index)}
                                spacing={12}
                                renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                                    <Box style={{ position: 'relative', ...wrapperStyle }}>
                                        {renderDefaultPhoto({ wrapped: true })}
                                        {photo.title && (
                                            <Box
                                                p='6px'
                                                fontSize='12'
                                                inset='auto 0 0 0'
                                                overflow='hidden'
                                                bgColor='rgba(255 255 255 / .6)'
                                                pos='absolute'
                                            >
                                                {trimDescription(photo.description!)}
                                            </Box>
                                        )}
                                    </Box>
                                )}
                            />
                        )}
                        {albumArray.length >= 10 ? (
                            <Flex p='32px' justifyContent='center'>
                                <Button isLoading={isLoading} onClick={() => setNextPage(nextPage + 1)}>
                                    View more
                                </Button>
                            </Flex>
                        ) : null}
                    </Box>
                    <Lightbox
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        slides={albumArray}
                        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                </Wrapper>
            </Box>
        </div>
    );
}

export default App;
