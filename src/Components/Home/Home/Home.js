import React from 'react';
import BannerBord from '../BannerBord/BannerBord';
import BannerSlider from '../BannerSlider/BannerSlider';
import HomeInventoryItems from '../HomeInventoryItems/HomeInventoryItems';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <BannerBord></BannerBord>
            <HomeInventoryItems></HomeInventoryItems>
        </div>
    );
};

export default Home;