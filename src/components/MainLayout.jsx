
const MainLayout = ({title=null, children}) => {
    return (
        <div className={"@container/min mx-auto max-w-3xl bg-gray-100 dark:bg-black dark:text-white  p-6 border-2 border-gray-500/25 dark:border-gray-500/75 "}>
            <div
                className={`${(title === "Personal Information" || title === "Address Details" || title === "Account Setup") ? "flex" : "hidden"} justify-between gap-4 text-lg dark:text-white mb-4 capitalize`}>
                <h1 className={`flex gap-x-2 justify-center items-center  ${title === "Personal Information" ? "text-black dark:text-white font-bold block " : "text-gray-600 dark:text-gray-400 font-medium @2xl/min:flex hidden"}`}>
                    <span className={`size-10 border rounded-full flex justify-center items-center dark:text-black ${title ===  "Personal Information" ? "text-black bg-white border-gray-700 ":"border-gray-300 bg-gray-300 text-gray-600 dark:text-gray-700 "}`}>1</span>
                    Personal Information
                </h1>
                <h1 className={`flex gap-x-2 justify-center items-center ${title === "Address Details" ? "text-black dark:text-white font-bold block " : "text-gray-600 dark:text-gray-400 font-medium @2xl/min:flex hidden "}`}>
                    <span className={`size-10  border rounded-full flex justify-center items-center dark:text-black ${title === "Address Details" ? "text-black bg-white border-gray-700 ":"border-gray-300 bg-gray-300 text-gray-600 dark:text-gray-700 "}`}>2</span>
                    Address Details
                </h1>
                <h1 className={`flex gap-x-2 justify-center items-center ${title === "Account Setup" ? "text-black dark:text-white font-bold block " : "text-gray-600 dark:text-gray-400 font-medium @2xl/min:flex hidden"}`}>
                    <span className={`size-10  border rounded-full flex justify-center items-center dark:text-black ${title === "Account Setup" ? "text-black bg-white border-gray-700 ":"border-gray-300 bg-gray-300 text-gray-600 dark:text-gray-700 "}`}>3</span>
                    Account Setup
                </h1>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default MainLayout;