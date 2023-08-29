import React, { useState, useEffect } from "react";
import Vehicle from "../Vehicle";
import "./VehicleList.css"

export default function VehicleList({ selectedMakes }) {
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
            <p>{selectedMakes}</p>
            <div className="vehicleList">
                {response
                    .filter(vehicle => !selectedMakes.length || selectedMakes.includes(vehicle.make))
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
