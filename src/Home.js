import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                    alt=""
                    className="home__banner"
                />
                <div className="home__row">
                    <Product
                        id="123"
                        title="Apple AirPods with Charging Case (Wired)"
                        rating={4}
                        price={56}
                        image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY606_.jpg"
                    />
                    <Product
                        id="14343223"
                        title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
                        rating={5}
                        price={49}
                        image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY606_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="122223"
                        title="Apple AirPods with Charging Case (Wired)"
                        rating={4}
                        price={56}
                        image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY218_.jpg"
                    />
                    <Product
                        id="12343423"
                        title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
                        rating={5}
                        price={49}
                        image="https://images-na.ssl-images-amazon.com/images/I/813T5unjeQL._AC_SX425_.jpg"
                    />
                    <Product
                        id="19855823"
                        title="Apple AirPods with Charging Case (Wired)"
                        rating={4}
                        price={56}
                        image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY218_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="12323223"
                        title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
                        rating={5}
                        price={49}
                        image="https://images-na.ssl-images-amazon.com/images/I/813T5unjeQL._AC_SX425_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
