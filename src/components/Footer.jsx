import { FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex justify-left items-center p-2">
            <div className=" font-xxs lg:font-sm font-thin footer-text ">
                Loosely designed in Figma, built by Alex Steeves with React.JS
            </div>

            <a className = "hover:text-cyan-300 duration-300 ml-5 link" href="https://alexsteeves.com/">
                <FaExternalLinkAlt />
            </a>
        </div>
    );
}
