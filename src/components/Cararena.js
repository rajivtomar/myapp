import React from 'react';

export default function rajeev() {
    return (
        <div>
            {/* <!--Navbar--> */}
            <header>
                {/* <!--Nav container--> */}
                <div className="nav container">
                    {/* <!--Menu Icon--> */}
                    <i className='bx bx-menu' id="menu-icon"></i>
                    {/* <!--Logo--> */}
                    <a href="#" className="logo">Car<span>Arena</span></a>
                    {/* <!--Nav List--> */}
                    <ul className="navbar">
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#cars">Cars</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#parts">Parts</a></li>
                        <li><a href="#blog">Our Blog</a></li>
                    </ul>
                    {/* <!--Search Icon--> */}
                    <i className='bx bx-search' id="search-icon" ></i>
                    {/* <!--Search box--> */}
                    <div className="search-box container">
                        <input type="search" name="" id="" placeholder="Search here..." />
                    </div>
                </div>
            </header>
            {/* <!--Home--> */}
            <section className="home" id="home">
                <div className="home-text">
                    <h1>We Have All <br /> Types Of <span>Beast </span><span2>You Need...</span2></h1>
                    <p>It's a never ending battle of making your cars better and  <br /> also trying to be better yourself. ...</p>
                    {/* <!--Home Button--> */}
                    <a href="#" className="btn">Discover Now</a>
                </div>
            </section>
            {/* <!-- Cars Section--> */}
            <section className="cars" id="cars">
                <div className="heading">
                    <span>All Cars</span>
                    <h2>We have all types of cars</h2>
                    <p>CarArena will help you buy the car you want</p>
                </div>
                {/* <!--Cars container--> */}
                <div className="cars-container container">
                    {/* <!--Box 1--> */}
                    <div className="box">
                        <img src="porsche wallpaper.jpg" alt="" />
                        <h2>Porsche Cars</h2>
                    </div>
                    {/* <!--Box 2--> */}
                    <div className="box">
                        <img src="mustang wallpaper.jpg" alt="" />
                        <h2>Mustang Cars</h2>
                    </div>
                    {/* <!--Box 3--> */}
                    <div className="box">
                        <img src="rolls-royce wallpaper.jpg" alt="" />
                        <h2>Rolls Royce Cars</h2>
                    </div>
                    {/* <!--Box 4--> */}
                    <div className="box">
                        <img src="sedan wallpaper.jpg" alt="" />
                        <h2>Sedans</h2>
                    </div>
                    {/* <!--Box 5--> */}
                    <div className="box">
                        <img src="toyota wallpaer.jpg" alt="" />
                        <h2>Toyota Cars</h2>
                    </div>
                    {/* <!--Box 6--> */}
                    <div className="box">
                        <img src="honda_civic_wallpaper.jpg" alt="" />
                        <h2>Honda Cars</h2>
                    </div>
                </div>
            </section>
            {/* <!--About--> */}
            <section className="about container" id="about">
                <div className="about-img">
                    <img src="car about1.webp" alt="" />
                </div>
                <div className="about-text">
                    <span>About Us</span>
                    <h2>Cheap Prices With <br />Quality Cars</h2>
                    <p>Car Arena is a comprehensive automotive platform, similar to CarDekho.com, this website serves as a virtual showroom and resource hub for car enthusiasts and buyers. Offering an extensive database of vehicles, it provides detailed information, expert reviews, and comparison tools to aid users in making well-informed decisions.<br /> The site aims to simplify the car-buying process by integrating user-friendly features, allowing seamless exploration of various models, specifications, and pricing. With a focus on enhancing the overall car shopping experience, the website becomes a one-stop destination for individuals seeking to research, compare, and find their ideal vehicles.​</p>
                    {/* <!--About button--> */}
                    <br />
                    <a href="#" className="btn">Learn More</a>
                </div>
            </section>
            {/* <!--parts section--> */}
            <section className="parts" id="parts">
                <div className="heading">
                    <span>What We Offer</span>
                    <h2>Our Car Is Always Excellent</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est consequuntur, minima eligendi hic corrupti.</p>
                </div>
                {/* <!--Parts Container--> */}
                <div className="parts-container container">
                    {/* <!--box1--> */}
                    <div className="box">
                        <img src="engine.webp" alt="" />
                        <h3>Auto Spare Part</h3>
                        <span>₹50000</span>
                        <i className='bx bxs-star' >(6 Reviews)</i>
                        <a href="#" className="btn">Buy Now</a>
                        <a href="#" className="details">View Details</a>
                    </div>
                    {/* <!--box2--> */}
                    <div className="box">
                        <img src="cart spare part.png" alt="" />
                        <h3>Auto Spare Part</h3>
                        <span>₹50000</span>
                        <i className='bx bxs-star' >(6 Reviews)</i>
                        <a href="#" className="btn">Buy Now</a>
                        <a href="#" className="details">View Details</a>
                    </div>
                    {/* <!--box3--> */}
                    <div className="box">
                        <img src="Car_vehicle_oils_lubrication_transmission_engine.webp" alt="" />
                        <h3>Auto Spare Part</h3>
                        <span>₹50000</span>
                        <i className='bx bxs-star' >(6 Reviews)</i>
                        <a href="#" className="btn">Buy Now</a>
                        <a href="#" className="details">View Details</a>
                    </div>
                    {/* <!--box4--> */}
                    <div className="box">
                        <img src="car parts.webp" alt="" />
                        <h3>Auto Spare Part</h3>
                        <span>₹50000</span>
                        <i className='bx bxs-star' >(6 Reviews)</i>
                        <a href="#" className="btn">Buy Now</a>
                        <a href="#" className="details">View Details</a>
                    </div>
                    {/* <!--box5--> */}
                    <div className="box">
                        <img src="car reels part.jpg" alt="" />
                        <h3>Auto Spare Part</h3>
                        <span>₹50000</span>
                        <i className='bx bxs-star' >(6 Reviews)</i>
                        <a href="#" className="btn">Buy Now</a>
                        <a href="#" className="details">View Details</a>
                    </div>
                    {/* <!--box6--> */}
                    <div className="box">
                        <img src="car tyre images.webp" alt="" />
                        <h3>Auto Spare Part</h3>
                        <span>₹50000</span>
                        <i className='bx bxs-star' >(6 Reviews)</i>
                        <a href="#" className="btn">Buy Now</a>
                        <a href="#" className="details">View Details</a>
                    </div>
                </div>
            </section>
            {/* <!--Blog Container--> */}
            <section className="blog" id="blog">
                <div className="heading">
                    <span>Blog & News</span>
                    <h2>Our Blog Content</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est consequuntur, minima eligendi hic corrupti.</p>
                </div>
                {/* <!--Blog container--> */}
                <div className="blog-container container">
                    {/* <!--Box 1--> */}
                    <div className="box">
                        <img src="blog 1.jpg" alt="" />
                        <span>17 Dec 2023</span>
                        <h3>How To Get Perfect Car At Low Price</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, animi.</p>
                        <a href="#" className="blog-btn">Read More<i className='bx bx-right-arrow-alt'></i></a>
                    </div>
                    {/* <!--Box 2--> */}
                    <div className="box">
                        <img src="blog 2.webp" alt="" />
                        <span>17 Dec 2023</span>
                        <h3>How To Get Perfect Car At Low Price</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, animi.</p>
                        <a href="#" className="blog-btn">Read More<i className='bx bx-right-arrow-alt'></i></a>
                    </div>
                    {/* <!--Box 3--> */}
                    <div className="box">
                        <img src="blog3.jpg" alt="" />
                        <span>17 Dec 2023</span>
                        <h3>How To Get Perfect Car At Low Price</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, animi.</p>
                        <a href="#" className="blog-btn">Read More<i className='bx bx-right-arrow-alt'></i></a>
                    </div>
                    {/* <!--Box 4--> */}
                    <div className="box">
                        <img src="blog4.jpeg" alt="" />
                        <span>17 Dec 2023</span>
                        <h3>How To Get Perfect Car At Low Price</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, animi.</p>
                        <a href="#" className="blog-btn">Read More<i className='bx bx-right-arrow-alt'></i></a>
                    </div>
                </div>
            </section>
            {/* <!-- Footer --> */}
            <section className="footer">
                <div className="footer-container container">
                    <div className="footer-box">
                        <a href="#" className="logo">Car<span>Point</span></a>
                        <div className="social">
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                            <a href="#"><i className='bx bxl-linkedin'></i></a>
                        </div>
                    </div>
                    <div className="footer-box">
                        <h3>Page</h3>
                        <a href="#">Home</a>
                        <a href="#">Cars</a>
                        <a href="#">Parts</a>
                        <a href="#">Sales</a>
                    </div>
                    <div className="footer-box">
                        <h3>Legal</h3>
                        <a href="#">Privacy</a>
                        <a href="#">Refund Policy</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                    <div className="footer-box">
                        <h3>Contact</h3>
                        <p>INDIA</p>
                        <p>UNITED STATE OF AMERICA</p>
                        <p>JAPAN</p>
                        <p>GERMANY</p>
                    </div>
                </div>
            </section>
            {/* <!--Copyright--> */}
            <div className="copyright">
                <p>&#169; CarpoolVenam All Right Reserved</p>
            </div>
            {/* <!--Link to Js--> */}
            <script src="Car.js" type="text/javascript" />
        </div>
    );
}