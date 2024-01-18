import { FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex justify-left items-center p-2">
            <div className=" font-xxs lg:font-sm font-thin text-slate-300 ">
                Loosely designed in Figma, built by Alex Steeves with React.JS
            </div>

            <a className = "hover:text-cyan-300 duration-300 ml-5 text-slate-100" href="https://alexsteeves.com/">
                <FaExternalLinkAlt />
            </a>
        </div>
    );
}
