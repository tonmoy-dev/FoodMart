import Head from 'next/head';
import Rating from "react-rating";

const StarRating = ({initialRating}) => {
    return (
        <>
            <Head>
            <script src="https://kit.fontawesome.com/0368de2544.js" crossorigin="anonymous"></script>
            </Head>
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