import { Link } from "react-router-dom";

interface ButtonProps {
    url: string;
    buttonText: string;
    link: string;
}
export default function Button({ url , buttonText , link} : ButtonProps) {
  return (
    <div className={`flex z-2 items-center gap-[4px] p-[10px] ${buttonText === "Instant Lottery" ? "bg-[#96152B] border-1 rounded-[10px] border-[#FFFFFF33]" : "rounded-[10px]"}`}>
        <img src={url} alt={buttonText}  />
        <Link to={link} className="text-[#FFFFFF] text-[14px] font-[700] no-underline">
            {buttonText}
        </Link>
    </div>
  )
}
