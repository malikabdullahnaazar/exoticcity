import React from 'react';
import HeadderBanner from "./HeaderBanner";
import HeadderBanner2 from "./HeaderBanner2";
import HeaderSection from "./HeaderSection";
import NavBar from "./Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div style={{
            position: 'relative',

        }} >
            < HeadderBanner />
            < HeadderBanner2 />
            <HeaderSection />
            <NavBar />
            {children}
            <div style={{
            marginTop: '10rem',
            marginBottom: 0,

        }} >
            <Footer />
            </div>
        </div>
    );
};

export default Layout;
