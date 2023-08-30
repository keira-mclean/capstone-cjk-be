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
                src={imgurl || "https://belowinvoice.com/wp-content/uploads/2020/02/bmw-M8-convertible-e1642634620414.png"}
            ></img>
            <div className="vehicleInfo">
                <div className="carTitle">
                    {year} {make}
                    <br></br>
                    {model}
                </div>
                <div className="carDetails">
                    {formattedPrice} | {formattedMileage}
                </div>
                <a href={"mailto:" + email}>
                    <button className="contactButton">Contact</button>
                </a>
            </div>
        </div>
    );
}
