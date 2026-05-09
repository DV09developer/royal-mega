interface ButtonProps {
    url: string;
    buttonText: string;
}
export default function Button({ url , buttonText} : ButtonProps) {
  return (
    <div className={`flex z-2 items-center gap-[4px] p-[10px] ${buttonText === "Instant Lottery" ? "bg-[#96152B] border-1 rounded-[10px] border-[#FFFFFF33]" : "rounded-[10px]"}`}>
        <img src={url} alt={buttonText}  />
        <p className="text-[#FFFFFF] text-[14px] font-[700]">{buttonText}</p>
    </div>
  )
}
