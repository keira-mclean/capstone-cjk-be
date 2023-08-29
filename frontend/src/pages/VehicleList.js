import React, { useState, useEffect } from "react";
import Vehicle from "../Vehicle";
import "./VehicleList.css"

export default function VehicleList({ selectedMakes, selectedModels, selectedYears, mileageOptions, priceOptions }) {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:5000/api/autos", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setResponse(await res.json());
        }
        fetchData();
    }, []);

    if (!response) return null;

    return (
        <>
            <h1>Inventory</h1>
            <div className="vehicleList">
                {response
                    .filter(vehicle => !selectedMakes.length || selectedMakes.includes(vehicle.make))
                    .filter(vehicle => !selectedModels.length || selectedModels.includes(vehicle.model))
                    .filter(vehicle => !selectedYears.length || selectedYears.map(Number).includes(vehicle.year))
                    .filter(vehicle => !mileageOptions.minMileage || vehicle.mileage >= mileageOptions.minMileage)
                    .filter(vehicle => !mileageOptions.maxMileage || vehicle.mileage <= mileageOptions.maxMileage)
                    .filter(vehicle => !priceOptions.minPrice || vehicle.price >= priceOptions.minPrice)
                    .filter(vehicle => !priceOptions.maxPrice || vehicle.price <= priceOptions.maxPrice)
                    .map((vehicle) => (
                        <Vehicle
                            key={vehicle._id}
                            make={vehicle.make}
                            model={vehicle.model}
                            year={vehicle.year}
                            price={vehicle.price}
                            mileage={vehicle.mileage}
                            email={vehicle.email}
                        />
                    ))}
            </div>
        </>
    );
}
