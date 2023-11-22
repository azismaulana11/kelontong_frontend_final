import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfileButton() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://65261c4e67cfb1e59ce7e741.mockapi.io/users');
                const data = response.data;
                setUserData(data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {userData && (
                <div className="btn-group">
                    <button type="button" className="btn btn-outline-info btn-sm">Selamat datang, {userData.nama}!</button>
                    <button type="button" className="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item">Profile</a></li>
                        <li><a className="dropdown-item">Reward</a></li>
                        <li><a className="dropdown-item">Logout</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

