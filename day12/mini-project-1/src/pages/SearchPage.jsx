import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SearchResults } from "../components/SearchResults";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

const SearchPage = (params) => {
    const { text, handleSearchText } = params;

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const searchTextFromURL = searchParams.get("text");
        if (searchTextFromURL) {
            handleSearchText(searchTextFromURL);
        }
    }, []);

    useEffect(() => {
        console.log("🟡 : text:", text);
        setSearchParams((prev) => {
            prev.set("text", text);
            return prev;
        });
    }, [text]);

    return (
        <div>
            <Header text={text} handleSearchText={handleSearchText} />
            <main>
                <p>
                    Search results for:
                    <span className="text-red-800 font-bold">{text}</span>
                </p>
                <SearchResults searchQuery={text} />
            </main>
            <Footer />
        </div>
    );
};

export { SearchPage };
