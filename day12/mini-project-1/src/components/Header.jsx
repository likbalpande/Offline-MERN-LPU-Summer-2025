// tailwind 1: 0.25rem === 4px
// tailwind 4: 1rem === 16px

// p-4   |  m-4 ---> top & left & right & bottom

// px-4  |  mx-4 ---> left & right
// py-4  |  my-4 ---> top & bottom

// pt-4  |  mt-4 ---> top
// pb-4  |  mb-4 ---> bottom
// pl-4  |  ml-4 ---> left
// pr-4  |  mr-4 ---> right

const Header = () => {
    return (
        <header className="flex bg-black p-4 justify-between ">
            <div>
                <p className="text-amber-300">Shopping App</p>
            </div>
            <div>
                <input className="border-1 border-amber-900 p-1 text-cyan-300" />
                <button className="border-1 border-amber-900 p-1 text-blue-400">Search</button>
            </div>
            <div>
                <div className="h-8 w-8 rounded-full bg-purple-700"></div>
            </div>
        </header>
    );
};

export { Header };
