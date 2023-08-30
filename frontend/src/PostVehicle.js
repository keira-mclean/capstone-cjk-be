import React, { useState } from 'react';
import './PostVehicle.css';

export default function PostVehicle(props) {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [mileage, setMileage] = useState('');
    const [price, setPrice] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorDetails, setErrorDetails] = useState(null);
    const [imgurl, setImg] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/autos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ make, model, year, mileage, price, email, imgurl })
            });
            if (response.ok) {
                setMessage('Form submitted successfully!');
                setErrorDetails(null);
                setMake('');
                setModel('');
                setYear('');
                setMileage('');
                setPrice('');
                setEmail('');
                setMileage('');
                setImg('');
            } else {
                setMessage('Form submission failed.');
                const errorText = await response.text();
                try {
                    setErrorDetails(JSON.parse(errorText));
                } catch (e) {
                    setErrorDetails(errorText);
                }
            }
        } catch (error) {
            setMessage('An error occurred while submitting the form.');
            setErrorDetails(error.toString());
        }
    }

    return (
        <>
            <div>
                <img src="./carpic.jpg"></img>
            </div>
            <form className="post-form" onSubmit={handleSubmit}>
                <h2>Post your vehicle for sale</h2>
                <div className="postDiv">
                    <input placeholder="Image URL" className="postInput" type="text" value={imgurl} onChange={e => setImg(e.target.value)} />
                </div>
                <div className="postDiv">
                    <input placeholder="Make" className="postInput" type="text" value={make} onChange={e => setMake(e.target.value)} />
                </div>
                <div className="postDiv">
                    <input placeholder="Model" className="postInput" type="text" value={model} onChange={e => setModel(e.target.value)} />
                </div>
                <div className="postDiv">
                    <input placeholder="Year" className="postInput" type="number" value={year} onChange={e => setYear(e.target.value)} />
                </div>
                <div className="postDiv">
                    <input placeholder="Mileage" className="postInput" type="number" value={mileage} onChange={e => setMileage(e.target.value)} />
                </div>
                <div className="postDiv">
                    <input placeholder="Price" className="postInput" type="number" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="postDiv">
                    <input placeholder="Contact Email" className="postInput" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <button className="postButton" variant="secondary" size="lg" type="submit">Post vehicle for sale</button>
            </form>
            {message && <p>{message}</p>}
            {errorDetails && (
                <>
                    <h3>Error Details</h3>
                    <pre>{JSON.stringify(errorDetails, null, 2)}</pre>
                </>
            )}
        </>
    )
}
