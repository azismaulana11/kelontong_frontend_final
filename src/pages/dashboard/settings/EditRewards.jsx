import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import DashboardLayout from '../../../layout/DashboardLayout';
import HeadingTitle from '../../../components/dashboard/HeadingTitle';

export default function EditRewards() {
    const [rewards, setRewards] = useState({
        name: '',
        poin: '',
        minPurchase: '',
        description: '',
        productId: ''
    });
    const [products, setProducts] = useState([]); 
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:7601/api/v1/products`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching Products:', error);
            });


        axios.get(`http://localhost:7601/api/v1/settings/rewards/${id}`)
            .then(response => {
                setRewards(response.data);
            })
            .catch(error => {
                console.error('Error fetching Rewards:', error);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:7601/api/v1/settings/rewards/${id}`, rewards);
            navigate('/dashboard/settings/rewards');
        } catch (error) {
            console.error('Error updating rewards:', error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setRewards(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <>
            <DashboardLayout>
                <HeadingTitle title='Edit Kategori'>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "white" }}>Settings</li>
                    <li className="breadcrumb-item"><Link to="/dashboard/settings/rewards" style={{ color: "white" }}>Rewards</Link></li>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Edit Rewards</li>
                </HeadingTitle>

                <div className="p-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card w-100">
                                <div className="card-body">
                                    <div className="mb-3 fs-4">
                                        Edit Rewards
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Nama</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="poin" className="form-label">Banyak Poin didapat</label>
                                            <input type="number" className="form-control" id="poin"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="min-purchase" className="form-label">Minimum Pembelian</label>
                                            <input type="number" className="form-control" id="minPurchase"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Deskripsi</label>
                                            <textarea className="form-control" id="description" rows="3"></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="product" className="form-label">Pilih Produk</label>
                                            <select className="form-select" id="productId" onChange={handleInputChange} value={rewards.productId}>
                                                <option defaultValue={''}>Pilih Produk</option>
                                                {products.map((product, index) => (
                                                    <option key={index} value={product.id}>{product.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/dashboard/settings/rewards" className="btn btn-danger me-3">Kembali</Link>
                                            <button type="submit" className="btn btn-primary" style={{ background: "#624BFF" }}>Simpan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}


