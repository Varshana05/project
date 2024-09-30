// src/components/SubmitApparel.js
import React, { useState } from 'react';
import axios from 'axios';

const SubmitApparel = () => {
    const [formData, setFormData] = useState({
        type: '',
        condition: '',
        preference: ''
    });

    const [message, setMessage] = useState('');

    const { type, condition, preference } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/apparel/submit', formData);
            setMessage(`Apparel submitted successfully with ID: ${res.data._id}`);
            setFormData({
                type: '',
                condition: '',
                preference: ''
            });
        } catch (err) {
            setMessage('Error submitting apparel');
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Type of Apparel:</label>
                    <select name="type" value={type} onChange={onChange} required>
                        <option value="">Select Type</option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Jacket">Jacket</option>
                        <option value="Dress">Dress</option>
                        <option value="Shirt">Shirt</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Condition:</label>
                    <div>
                        <input
                            type="radio"
                            name="condition"
                            value="Worn-out"
                            checked={condition === 'Worn-out'}
                            onChange={onChange}
                            required
                        /> Worn-out
                        <input
                            type="radio"
                            name="condition"
                            value="Unused"
                            checked={condition === 'Unused'}
                            onChange={onChange}
                        /> Unused
                    </div>
                </div>
                <div>
                    <label>Preference:</label>
                    <select name="preference" value={preference} onChange={onChange} required>
                        <option value="">Select Preference</option>
                        <option value="Recycle">Recycle</option>
                        <option value="Donate">Donate</option>
                        <option value="Dispose">Dispose</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SubmitApparel;
