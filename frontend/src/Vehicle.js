import React from "react";
import "./Vehicle.css";

export default function Vehicle(props) {
    const { make, model, year, price, mileage, email, imgurl } = props;

    const formattedPrice = price
        ? price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
        : "N/A";

    const formattedMileage = mileage
        ? mileage.toLocaleString("en-US")
        : "N/A";


    return (
        <div className="vehicleCard">
            <img
                className="vehicleImg"
                src={imgurl}
            ></img>
            <div className="vehicleInfo">
                <div className="carTitle">
                    {year} {make} {model}
                </div>
                <div className="carDetails">
                    {formattedPrice} | {formattedMileage}
                </div>
                <a href={"mailto:" + email}>
                    <button>Contact</button>
                </a>
            </div>
        </div>
    );
}
