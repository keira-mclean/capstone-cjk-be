import React, { useState } from 'react';
import { Button, FormGroup, FormLabel, Image, Container } from 'react-bootstrap';



export default function PostVehicle(props) {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [mileage, setMileage] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const [errorDetails, setErrorDetails] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/autos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ make, model, year, mileage, price })
            });
            if (response.ok) {
                setMessage('Form submitted successfully!');
                setErrorDetails(null);
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
            <Container>
                <div>
                    <Image src="./carpic.jpg"></Image>
                </div>

                <FormGroup onSubmit={handleSubmit}>
                    <div>
                        <FormLabel column="lg" lg={1}>Make:</FormLabel>
                        <input type="text" value={make} onChange={e => setMake(e.target.value)} />
                    </div>
                    <div>
                        <FormLabel column="lg" lg={1}>Model:</FormLabel>
                        <input type="text" value={model} onChange={e => setModel(e.target.value)} />
                    </div>
                    <div>
                        <FormLabel column="lg" lg={1}>Year:</FormLabel>
                        <input type="number" value={year} onChange={e => setYear(e.target.value)} />
                    </div>
                    <div>
                        <FormLabel column="lg" lg={1}>Mileage:</FormLabel>
                        <input type="number" value={mileage} onChange={e => setMileage(e.target.value)} />
                    </div>
                    <div>
                        <FormLabel column="lg" lg={1}>Price:</FormLabel>
                        <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
                    </div>
                    <Button variant="secondary" size="lg" type="submit">Post vehicle for sale</Button>
                </FormGroup>
                {message && <p>{message}</p>}
                {errorDetails && (
                    <>
                        <h3>Error Details</h3>
                        <pre>{JSON.stringify(errorDetails, null, 2)}</pre>
                    </>
                )}
            </Container>
        </>
    )
}
