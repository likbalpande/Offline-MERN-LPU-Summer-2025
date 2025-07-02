import { useParams } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

const ViewPage = () => {
    const params = useParams();
    const { productId } = params;
    const [product, setProduct] = useState({});

    const getData = async () => {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <h4>Products Id: {productId}</h4>
                <h2>{product.title}</h2>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {product.images?.map((imgUrl) => {
                        return <img key={imgUrl} src={imgUrl} className="w-75" />;
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { ViewPage };
