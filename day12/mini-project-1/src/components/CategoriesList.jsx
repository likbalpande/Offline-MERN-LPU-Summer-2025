import { useEffect, useState } from "react";

const CategoryList = () => {
    const [data, setData] = useState([]); // [ {slug, name, url}, {slug, name, url}, ...]

    const getData = async () => {
        const response = await fetch("https://dummyjson.com/products/categories");
        const result = await response.json();
        console.log(result);
        setData(result);
    };

    useEffect(() => {
        getData();
    }, []); // this use effect's call back function will only run ONCE

    return (
        <div className="flex gap-4 items-center justify-start flex-wrap">
            {data.map((elem) => {
                return (
                    <p key={elem.name} className="p-2 rounded-lg bg-amber-200">
                        {elem.name}
                    </p>
                );
            })}
        </div>
    );
};

export { CategoryList };
