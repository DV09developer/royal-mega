import { useNavigate } from "react-router-dom";

const footerSections = [
    {
        title: "About",
        items: [
            {
                label: "About RoyalMega",
                link: "/about",
            },
            {
                label: "How it works",
                link: "/how-it-works",
            },
            {
                label: "Yesterday Results",
                link: "/yesterday-results",
            },
            {
                label: "Winners & Payouts",
                link: "/winner",
            },
        ],
    },
    {
        title: "Support",
        items: [
            {
                label: "Help Center / FAQs",
                link: "/help-center",
            },
            {
                label: "Contact us",
                link: "/contact",
            },
            {
                label: "Ticket purchase guide (step-by-step)",
                link: "/ticket-guide",
            },
            {
                label: "Deposit & withdrawal methods",
                link: "/payments",
            },
        ],
    },
    {
        title: "Legal",
        items: [
            {
                label: "Terms & Conditions",
                link: "/terms",
            },
            {
                label: "Privacy Policy",
                link: "/privacy-policy",
            },
            {
                label: "Cookie Policy",
                link: "/cookie-policy",
            },
            {
                label: "KYC & Verification policy",
                link: "/kyc-policy",
            },
            {
                label: "Anti-fraud / AML policy",
                link: "/aml-policy",
            },
        ],
    },
];
export default function Footer() {
    const navigate = useNavigate();
    return (
        <div className="pb-[20px]">
        <div className="relative mx-auto w-[1398px] mt-[50px] mb-[20px] rounded-[10px] border-1 border-[#FFFFFF33]  bg-gradient-to-b from-[#8C0B31] to-[#310117]">
            <div className="flex gap-[10px]">

                <div className="pt-[24px] px-[50px] w-[337px]">
                    <div className="flex flex-col gap-[16px]">
                        <img src="flat_logo.svg" alt="logo of the company" />
                        <p className="text-[#FFFFFF] text-[16px] font-[400]">
                            Odds, that games are of chance, that images are illustrative, and that local laws apply.
                        </p>
                    </div>
                </div>

                {footerSections.map((section, index) => (
                    <div key={index} className="pt-[24px] px-[50px] w-[337px]">
                        <div className="flex flex-col gap-[16px]">
                            <p className="text-[#FFFFFF33] text-[16px] font-[600]">
                                {section.title}
                            </p>

                            {section.items.map((item, itemIndex) => (
                                    <p
                                        key={itemIndex}
                                        onClick={() => navigate(item.link)}
                                        className="text-left text-[#FFFFFF] text-[16px] font-[400] "
                                    >
                                        {item.label}
                                    </p>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-[24px] px-[50px] w-[337px]">
                <p className="text-[#FFFFFF] text-[16px] font-[600] mb-[16px]">
                    We Accept
                </p>
                <div className="flex  gap-[20px]">
                    <img src="footer/upi.svg" alt="upi payment method" />
                    <img src="footer/phonepe.svg" alt="phonepe payment method" />
                    <img src="footer/googlepay.svg" alt="googlepay payment method" />
                    <img src="footer/paytm.svg" alt="paytm payment method" />
                    <img src="footer/jiopayment.svg" alt="jio payment method" />
                    <img src="footer/netbanking.svg" alt="netbanking payment method" />
                </div>
            </div>

            <div className="py-[24px] px-[50px] bg-gradient-to-b from-[#8C0B31] to-[#310117] border border-[#FFFFFF33] rounded-[10px] flex justify-between items-center">
                <p className="text-[#FFFFFF] text-[16px] font-[400]">
                    Copyright © 2025 Royal Mega.
                </p>
                <div className="flex gap-[10px]">
                    <img src="footer/whatsapp.svg" alt="whatsapp social media" />
                    <img src="footer/facebook.svg" alt="facebook social media" />
                    <img src="footer/instagram.svg" alt="instagram social media" />
                    <img src="footer/telegram.svg" alt="telegram social media" />
                    <img src="footer/youtube.svg" alt="youtube social media" />
                    <img src="footer/x.svg" alt="x social media" />
                </div>
            </div>
        </div>
        </div>
    )
}
