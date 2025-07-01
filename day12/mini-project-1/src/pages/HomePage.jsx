// module.css :: cover it in the last
// tailwind - is just (normal css ++) with shorthands

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CategoryList } from "../components/CategoriesList";

const HomePage = () => {
    return (
        <div>
            <Header />
            <main className="p-8">
                <div>
                    <CategoryList />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { HomePage };
