//import React from "react";
import ImageGallery from 'react-image-gallery';

export const images = [
    {
        original: '/PLEASANT_GROVE_MIN/PG1.png',
        thumbnail: '/THUMBNAILS/PG1.png',
        title: 'Pleasant Grove #1',
        id: 1
    }, {
        original: '/PLEASANT_GROVE_MIN/PG2.png',
        thumbnail: '/THUMBNAILS/PG2.png',
        title: 'Pleasant Grove #2',
        id: 2
    }, {
        original: '/PLEASANT_GROVE_MIN/PG3.png',
        thumbnail: '/THUMBNAILS/PG3.png',
        title: 'Pleasant Grove #3',
        id: 3
    }, {
        original: '/PLEASANT_GROVE_MIN/PG4.png',
        thumbnail: '/THUMBNAILS/PG4.png',
        title: 'Pleasant Grove #4',
        id: 4
    }, {
        original: '/PLEASANT_GROVE_MIN/PG5.png',
        thumbnail: '/THUMBNAILS/PG6.png',
        title: 'Pleasant Grove #5',
        id: 5
    }, {
        original: '/PLEASANT_GROVE_MIN/PG6.png',
        thumbnail: '/THUMBNAILS/PG6.png',
        title: 'Pleasant Grove #6',
        id: 6
    }, {
        original: '/PLEASANT_GROVE_MIN/PG7.png',
        thumbnail: '/THUMBNAILS/PG7.png',
        title: 'Pleasant Grove #7',
        id: 7
    }, {
        original: '/PLEASANT_GROVE_MIN/PG8.png',
        thumbnail: '/THUMBNAILS/PG8.png',
        title: 'Pleasant Grove #8',
        id: 8
    }, {
        original: '/PLEASANT_GROVE_MIN/PG9.png',
        thumbnail: '/THUMBNAILS/PG9.png',
        title: 'Pleasant Grove #9',
        id: 9
    }, {
        original: '/PLEASANT_GROVE_MIN/PG10.png',
        thumbnail: '/THUMBNAILS/PG10.png',
        title: 'Pleasant Grove #10',
        id: 10
    }, {
        original: '/PLEASANT_GROVE_MIN/PG11.png',
        thumbnail: '/THUMBNAILS/PG11.png',
        title: 'Pleasant Grove #11',
        id: 11
    }, {
        original: '/PLEASANT_GROVE_MIN/PG12.png',
        thumbnail: '/THUMBNAILS/PG12.png',
        title: 'Pleasant Grove #12',
        id: 12
    }, {
        original: '/PLEASANT_GROVE_MIN/PG13.png',
        thumbnail: '/THUMBNAILS/PG13.png',
        title: 'Pleasant Grove #13',
        id: 13
    }, {
        original: '/PLEASANT_GROVE_MIN/PG14.png',
        thumbnail: '/THUMBNAILS/PG14.png',
        title: 'Pleasant Grove #14',
        id: 14
    }, {
        original: '/PLEASANT_GROVE_MIN/PG15.png',
        thumbnail: '/THUMBNAILS/PG15.png',
        title: 'Pleasant Grove #15',
        id: 15
    }, {
        original: '/PLEASANT_GROVE_MIN/PG16.png',
        thumbnail: '/THUMBNAILS/PG16.png',
        title: 'Pleasant Grove #16', 
        id: 16
    }, {
        original: '/PLEASANT_GROVE_MIN/PG17.png',
        thumbnail: '/THUMBNAILS/PG17.png',
        title: 'Pleasant Grove #17',
        id: 17
    }, {
        original: '/PLEASANT_GROVE_MIN/PG18.png',
        thumbnail: '/THUMBNAILS/PG18.png',
        title: 'Pleasant Grove #18',
        id: 18
    }, {
        original: '/PLEASANT_GROVE_MIN/PG19.png',
        thumbnail: '/THUMBNAILS/PG19.png',
        title: 'Pleasant Grove #19',
        id: 19
    }, {
        original: '/PLEASANT_GROVE_MIN/PG20.png',
        thumbnail: '/THUMBNAILS/PG20.png',
        title: 'Pleasant Grove #20',
        id: 20
    }, {
        original: '/PLEASANT_GROVE_MIN/PG21.png',
        thumbnail: '/THUMBNAILS/PG21.png',
        title: 'Pleasant Grove #21',
        id: 21
    }, {
        original: '/PLEASANT_GROVE_MIN/PG22.png',
        thumbnail: '/THUMBNAILS/PG22.png',
        title: 'Pleasant Grove #22',
        id: 22
    }, {
        original: '/PLEASANT_GROVE_MIN/PG23.png',
        thumbnail: '/THUMBNAILS/PG23.png',
        title: 'Pleasant Grove #23',
        id: 23
    },
]

function App() {
    return (
        <div className="App">
            <ImageGallery items={images} showPlayButton={true} showFullscreenButton={true} slideDuration={500} />
        </div>
    );
}

export default App;