import React from 'react';
import Footer from '../commons/Footer';
import Header from '../commons/Header';

function PageWrapper({ children }) {
    return (
        <div className="m-0 w-full">
            <Header />
            <div className="w-full min-h-[calc(100vh-195px)] overflow-auto pt-2 sm:pt-10 ">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PageWrapper;
