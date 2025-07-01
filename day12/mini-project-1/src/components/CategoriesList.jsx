import { useEffect, useState } from "react";

const CategoryList = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch("https://dummyjson.com/products/categories");
        const result = await response.json();
        console.log(result);
    };

    useEffect(() => {
        getData();
    }, []); // this use effect's call back function will only run ONCE

    return (
        <div>
            {data.map((elem) => {
                <p>{elem}</p>;
            })}
        </div>
    );
};

export { CategoryList };
