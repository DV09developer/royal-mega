// import { Routes, Route } from 'react-router-dom';
// import LandingPage from '../pages/LandingPage';
// import Layout from '../layout/Layout';
// import InstantLotteryPage from '../pages/InstantLotteryPage';
// import HowItWorksPage from '../pages/HowItWorksPage';
// import YesterdayResultPage from '../pages/YesterdayResultPage';
// import WinnerPage from '../pages/WinnerPage';
// import MatkaPage from '../pages/MatkaPage';
// import LottoPage from '../pages/LottoPage';
// import LotteryPage from '../pages/LotteryPage';
// import CasinoPage from '../pages/CasinoPage';

// export default function Approutes() {
//     return (
//         <Routes>
//             <Route path="/" element={<Layout />} >
//                 <Route index element={<LandingPage />} />
//                 <Route path="instant-lottery" element={<InstantLotteryPage />} />
//                 <Route path="lottery" element={<LotteryPage />} />
//                 <Route path="lotto" element={<LottoPage />} />
//                 <Route path="matka" element={<MatkaPage />} />
//                 <Route path="casino" element={<CasinoPage />} />
//                 <Route path="winner" element={<WinnerPage />} />
//                 <Route path="yesterday-results" element={<YesterdayResultPage />} />
//                 <Route path="how-it-works" element={<HowItWorksPage />} />
//             </Route>
//         </Routes>
//     )
// }

import { Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Layout from '../layout/Layout';

import InstantLotteryPage from '../pages/InstantLotteryPage';
import HowItWorksPage from '../pages/HowItWorksPage';
import YesterdayResultPage from '../pages/YesterdayResultPage';
import WinnerPage from '../pages/WinnerPage';

import MatkaPage from '../pages/MatkaPage';
import LottoPage from '../pages/LottoPage';
import LotteryPage from '../pages/LotteryPage';
import CasinoPage from '../pages/CasinoPage';

// NEW PAGES
import AboutPage from '../pages/AboutPage';
import HelpCenterPage from '../pages/HelpCenterPage';
import ContactPage from '../pages/ContactPage';
import TicketGuidePage from '../pages/TicketGuidePage';
import PaymentsPage from '../pages/PaymentsPage';

import TermsPage from '../pages/TermsPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import CookiePolicyPage from '../pages/CookiePolicyPage';
import KycPolicyPage from '../pages/KycPolicyPage';
import AmlPolicyPage from '../pages/AmlPolicyPage';

export default function Approutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>

                {/* Home */}
                <Route index element={<LandingPage />} />

                {/* Games */}
                <Route path="instant-lottery" element={<InstantLotteryPage />} />
                <Route path="lottery" element={<LotteryPage />} />
                <Route path="lotto" element={<LottoPage />} />
                <Route path="matka" element={<MatkaPage />} />
                <Route path="casino" element={<CasinoPage />} />

                {/* About */}
                <Route path="about" element={<AboutPage />} />
                <Route path="how-it-works" element={<HowItWorksPage />} />
                <Route path="yesterday-results" element={<YesterdayResultPage />} />
                <Route path="winner" element={<WinnerPage />} />

                {/* Support */}
                <Route path="help-center" element={<HelpCenterPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="ticket-guide" element={<TicketGuidePage />} />
                <Route path="payments" element={<PaymentsPage />} />

                {/* Legal */}
                <Route path="terms" element={<TermsPage />} />
                <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="cookie-policy" element={<CookiePolicyPage />} />
                <Route path="kyc-policy" element={<KycPolicyPage />} />
                <Route path="aml-policy" element={<AmlPolicyPage />} />

            </Route>
        </Routes>
    );
}