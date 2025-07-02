import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { ViewPage } from "./pages/ViewPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useState } from "react";

// when the state change --> component re-render --> re-run :: APP
const App = () => {
    const [text, setText] = useState(""); // a
    console.log("🟡 : text:", text);

    const handleSearchText = (newVal) => {
        setText(newVal); // noted! --> a
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage text={text} handleSearchText={handleSearchText} x="y" />} />
                <Route path="/search" element={<SearchPage text={text} handleSearchText={handleSearchText} />} />
                <Route path="/view" element={<ViewPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
