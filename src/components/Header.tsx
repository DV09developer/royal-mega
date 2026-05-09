import Button from "./ui/Button";

const Menu = [
    {
        name: "Instant Lottery",
        url: "Instant-lottery.svg"
    },
    {
        name: "Lottery",
        url: "lottery.svg"
    },
    {
        name: "Matka",
        url: "matka.svg"
    },
    {
        name: "Lotto",
        url: "lotto.svg"
    },
    {
        name: "Casino",
        url: "casino.svg"
    }
]
export default function Header() {
    return (
        <div className="relative mx-auto w-[1398px]">
            <div className="z-20 overflow-hidden w-[1398px] h-[54px] relative top-[10px] rounded-[11px] border-1 border-[#FFFFFF33]  bg-gradient-to-b from-[#8C0B31] to-[#310117]">
                {/* left side menu */}
                <div className="absolute top-[5px] left-[5px] flex z-30 ">
                    {Menu.map((item) => (
                        <Button key={item.name} url={item.url} buttonText={item.name} />
                    ))}
                </div>

                {/* right side menu */}
                <div className="absolute top-[5px] right-[5px] flex z-30 flex gap-[6px]">
                    <div className="flex gap-[5px] border px-[14px] py-[10px] rounded-[10px] border-[#FFFFFF33] bg-[#140C0B1A] backdrop-blur-[16px]">
                        <p className="text-[#FFFFFF] font-[600] text-[14px]">En</p>
                        <img src="down-arrow.svg" alt="dropdown" />
                    </div>
                    <div className="flex items-center gap-[5px] border p-[10px] rounded-[10px] border-[#FFFFFF33] bg-[#140C0B1A] backdrop-blur-[16px]">
                        <img src="bell-icon.svg" alt="notification" />
                    </div>
                    <div className="flex items-center gap-[5px] border p-[10px] rounded-[10px] border-[#FFFFFF33] bg-[#140C0B1A] backdrop-blur-[16px]">
                        <img src="user.svg" alt="notification" />
                    </div>
                    <div className="flex items-center gap-[5px] border pl-[16px] rounded-[10px] border-[#FFFFFF33] bg-[#140C0B1A] backdrop-blur-[16px]">
                        <img src="wallet.svg" alt="notification" />
                        <p className="text-[#FFFFFF] font-[700] text-[14px] pr-[2px]">₹5,000.00</p>
                        <button className="bg-[#96152B] border-1 rounded-[10px] border-[#FFFFFF33] px-[14px] py-[10px] bg-gradient-to-b from-[#35141B] to-[#901B2B]">
                            <p className="text-[#FFFFFF] text-[14px] font-[600]">Add Money</p>
                        </button>
                    </div>
                </div>


                {/* Dotted design */}
                <div className="absolute left-[446px] top-[-15px] z-10 ">
                    <img src="dotted-design.svg" height="88" width="516" />
                </div>
                <div className="absolute left-[-258px] top-[-15px] z-10 ">
                    <img src="dotted-design.svg" height="88" width="516" />
                </div>
                <div className="absolute left-[1140px] top-[-15px] z-10 ">
                    <img src="dotted-design.svg" height="88" width="516" />
                </div>
            </div>

            {/* Logo section */}
            <div className="absolute left-[614px] top-[-1px] z-40">
                <img src="logo-rectangle.svg" />
            </div>
            <div className="absolute left-[653px] top-[12px] z-50">
                <img src="logo.svg" />
            </div>
        </div>
    )
}
