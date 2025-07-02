// react re-render's component
//    EITHER on "state" change
//    OR on "props" change

import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const LIMIT = 4;

const SearchResults = (props) => {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    console.log("🟡 : page:", page);
    const { searchQuery } = props; // a

    const getSearchResults = async () => {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${searchQuery}&skip=${LIMIT * (page - 1)}&limit=${LIMIT}`
        );
        const data = await response.json();
        console.log("🟡 : data:", data);

        setResults(data.products);

        setTotalPages(Math.ceil(data.total / LIMIT));
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

    useEffect(() => {
        setPage(1);
    }, [searchQuery]);

    const dummyArray = new Array(totalPages).fill("hello");

    return (
        <div>
            <h2>{searchQuery}</h2>
            <div className="flex flex-col gap-6">
                {results.map((elem) => {
                    // return <ProductResultCard key={elem.id} {...elem} />;
                    return (
                        <ProductResultCard
                            key={elem.id} // help react to identify each card uniquely
                            id={elem.id} // help react to identify each card uniquely
                            title={elem.title}
                            price={elem.price}
                            rating={elem.rating}
                            thumbnail={elem.thumbnail}
                        />
                    );
                })}
            </div>
            <div>
                <div className="p-4 flex gap-x-4 gap-y-2 items-center justify-center flex-wrap">
                    {dummyArray.map((elem, idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    setPage(idx + 1);
                                }}
                                className="px-2 py-1 bg-blue-600 text-white rounded-md text-sm cursor-pointer"
                            >
                                {idx + 1}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { SearchResults };
