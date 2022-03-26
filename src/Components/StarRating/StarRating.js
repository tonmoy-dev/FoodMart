import Head from 'next/head';
import Rating from "react-rating";
import Script from 'next/script';

const StarRating = ({initialRating}) => {
    return (
        <>
           
            <Script src="https://kit.fontawesome.com/0368de2544.js" crossorigin="anonymous"></Script>
           
            <Rating
                initialRating={initialRating}
                emptySymbol="far fa-star text-yellow-300"
                fullSymbol="fas fa-star text-yellow-300"
                readonly
            />
        </>
    );
}

export default StarRating;