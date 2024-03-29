import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import {Link} from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';

// test vs code on github
const Home = () => {
    return (
        <>
            <Hero>
                <Banner 
                    title="luxurious rooms"
                    subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms></FeaturedRooms>
        </>
    )
}

export default Home;
