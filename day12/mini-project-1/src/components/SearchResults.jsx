// react re-render's component
//    EITHER on "state" change
//    OR on "props" change

import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const LIMIT = 4;

const SearchResults = (props) => {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    console.log("🟡 : page:", page);
    const { searchQuery } = props; // a

    const getSearchResults = async () => {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${searchQuery}&skip=${LIMIT * (page - 1)}&limit=${LIMIT}`
        );
        const data = await response.json();
        console.log("🟡 : data:", data);
        setResults(data.products);
    };

    // you will have to revise useEffect (debouncing)
    useEffect(() => {
        console.log("---starting useEffect----");
        const timeoutId = setTimeout(getSearchResults, 400);

        return () => {
            console.log("---cleaning-up useEffect----");
            clearTimeout(timeoutId);
        };
    }, [page, searchQuery]); // dependency array: initial render only

    return (
        <div>
            <h2>{searchQuery}</h2>
            <div className="flex flex-col gap-6">
                {results.map((elem) => {
                    // return <ProductResultCard key={elem.id} {...elem} />;
                    return (
                        <ProductResultCard
                            key={elem.id} // help react to identify each card uniquely
                            title={elem.title}
                            price={elem.price}
                            rating={elem.rating}
                            thumbnail={elem.thumbnail}
                        />
                    );
                })}
            </div>
            <div>
                <div className="flex gap-2 items-center justify-center">
                    <button className="py-1 px-2 bg-amber-200 rounded-md">1</button>
                    <button className="py-1 px-2 bg-amber-200 rounded-md" onClick={() => setPage(2)}>
                        2
                    </button>
                </div>
            </div>
        </div>
    );
};

export { SearchResults };
