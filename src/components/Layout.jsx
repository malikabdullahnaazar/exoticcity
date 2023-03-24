import React from 'react';
import HeadderBanner from "./HeaderBanner";
import HeadderBanner2 from "./HeaderBanner2";
import HeaderSection from "./HeaderSection";
import NavBar from "./Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            < HeadderBanner />
            < HeadderBanner2 />
            <HeaderSection />
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
