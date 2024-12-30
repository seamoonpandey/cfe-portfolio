
export default function Navbar() {
    return (
        <nav className="bg-transparent absolute flex justify-evenly items-center w-full">
            <div id="logo" className="text-white font-bold">
                Logo
            </div>
            <ul className="flex gap-5 text-white text-[.5rem]">
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
