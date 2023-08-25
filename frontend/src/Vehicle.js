import React, { useState, useEffect } from "react";

export default function Vehicle() {
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

    return <div>{JSON.stringify(response)}</div>;
}
