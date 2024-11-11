import { Link } from 'react-router-dom';

function BuyNowButton() {
    return (
        <Link to="/buy">
            <button className="btn-primary">Buy Now</button>
        </Link>
    );
}

export default BuyNowButton;