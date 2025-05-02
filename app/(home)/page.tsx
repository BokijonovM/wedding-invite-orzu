import React from 'react';
import { Contact, Hero } from './components';

const Home = () => {
    return (
        <div className="bg-[url('/flower-large.svg')] bg-center">
            <Hero />
            <Contact />
        </div>
    );
};

export default Home;
