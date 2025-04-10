import React from 'react';
import ThemeToggle from "./theme/ThemeToggle";

const MainLayout = ({title=null, children}) => {
    return (
        <div className={"container mx-auto max-w-3xl bg-gray-100 dark:bg-black dark:text-white  p-6 border-2 border-gray-500/25 dark:border-gray-500/75 "}>
            {title && <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>}
            <div >{children}</div>
        </div>
    );
};

export default MainLayout;