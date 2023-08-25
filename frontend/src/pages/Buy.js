import React from "react";
import './Buy.css';

export default function Home(props) {
    return (
        <>
            <div className="hero-image">
                <img src="https://cdn1-blog.iseecars.com/wp-content/uploads/2017/11/car-sales-photo-e1622734127327.jpg" alt="Hero Image"></img>
                <h1 className="hero-text">The Lot</h1>
                <h3 className="hero-subtext">There is a lot going on here!</h3>
            </div>
            <div className="container">
                <p className="text-content">The Lot is a company that aims to make private party car sales easier and safer for both buyers and sellers. The company provides a platform where people can list their cars for sale, browse through available options, and contact potential sellers. The Lot also offers a range of services to ensure that people get the car they are expecting, such as vehicle inspection, title transfer, financing, and warranty. The Lot’s mission is to simplify the car buying and selling process, while also protecting the interests of both parties.</p>
                <div className="image-row">
                    <a href="https://example.com/image1" onClick={(event) => { props.setPage("./pages/Home"); event.preventDefault(); }}>
                        <div className="image-container">
                            <img src="<URL>" alt="Image 1"></img>
                            <span className="image-text">Search for your new vehicle</span>
                        </div>
                    </a>
                    <a href="https://example.com/image2" onClick={(event) => { props.setPage("Sell"); event.preventDefault(); }}>
                        <div className="image-container">
                            <img src="https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/sellcar.jpg" alt="Image 2"></img>
                            <span className="image-text">Sell your vehicle</span>
                        </div>
                    </a>
                    <a href="https://example.com/image3" onClick={(event) => { props.setPage("Sell"); event.preventDefault(); }} role="button">
                        <div className="image-container">
                            <img src="https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/ContactUsKiera.jpg" alt="Image 3"></img>
                            <span className="image-text">Contact us</span>
                        </div>
                    </a>
                </div>
            </div>

        </>
    );
}
