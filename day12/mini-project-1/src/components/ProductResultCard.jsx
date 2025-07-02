import { useNavigate } from "react-router";

const ProductResultCard = (props) => {
    const navigate = useNavigate();
    const { id, title, price, thumbnail } = props;

    const handleViewProduct = () => {
        navigate(`/${id}/view`);
    };

    return (
        <div className="p-4 rounded-lg bg-gray-200" onClick={handleViewProduct}>
            <img src={thumbnail} />
            <p>{title}</p>
            <p>Rs. {price * 85}</p>
        </div>
    );
};

export { ProductResultCard };
