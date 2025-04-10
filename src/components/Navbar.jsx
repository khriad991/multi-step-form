import ThemeToggle from "./theme/ThemeToggle";
export default function Navbar() {
    return (
        <header className="bg-white border border-gray-500/50 rounded-md container w-full dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf] shadow-box-shadow-first sticky top-0 z-10 py-2 w-full">
            <div className="mx-auto flex justify-between items-center px-4">
                <h1 className="text-md font-bold text-sky-700 dark:text-white capitalize">Multi step form </h1>
                <ThemeToggle />
            </div>
        </header>
    );
}
