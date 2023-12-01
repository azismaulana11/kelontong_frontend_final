import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import DashboardLayout from '../../../layout/DashboardLayout'
import HeadingTitle from '../../../components/dashboard/HeadingTitle'


export default function AddRewards() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        poin: '',
        minPurchase: '',
        description: ''
    });

    useEffect(() => {
        axios.get('http://localhost:7601/api/v1/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
    };

    const handleFormData = (e) => {
        setFormData({
            ...formData, 
            [e.target.id] : e.target.value
        })
        console.log(formData)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const { name, poin, minPurchase, description } = formData;
        if (!name || !poin || !minPurchase || !description || !selectedProduct) {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Isi semua form dulu ya...'
            });
            return;
        }

        try {
            console.log('Trying to save reward...');
            
            const rewardData = {
                name,
                poin,
                minPurchase,
                description,
                productId: selectedProduct 
            };

            // Posting data to the API endpoint
            const response = await axios.post('http://localhost:7601/api/v1/settings/rewards', rewardData);

            if (response.status === 200) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Reward berhasil ditambah!'
                });

                setFormData({
                    name: '',
                    poin: '',
                    minPurchase: '',
                    description: ''
                });
                setSelectedProduct('');
            } else {
                throw new Error('Failed to save the reward.');
            }
        } catch (error) {
            console.error('Error while saving reward:', error); 
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ada yg salah! coba lagi nanti'
            });
        }
    };


    return (
        <>
            <DashboardLayout>
                <HeadingTitle title="Tambah Rewards">
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "white" }}>Settings</li>
                    <li className="breadcrumb-item"><Link to="/dashboard/settings/rewards" style={{ color: "white" }}>Rewards</Link></li>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Add Rewards</li>
                </HeadingTitle>

                <div className="p-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card w-100">
                                <div className="card-body">
                                    <div className="mb-3 fs-4">
                                        Masukkan Rewards
                                    </div>
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Nama</label>
                                            <input type="text" className="form-control" id="name" onChange={handleFormData} value={formData.name} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="poin" className="form-label">Banyak Poin didapat</label>
                                            <input type="number" className="form-control" id="poin" onChange={handleFormData}  value={formData.poin} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="min-purchase" className="form-label">Minimum Pembelian</label>
                                            <input type="number" className="form-control" id="minPurchase" onChange={handleFormData} value={formData.minPurchase}  />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Deskripsi</label>
                                            <textarea className="form-control" id="description" rows="3" onChange={handleFormData} value={formData.description} ></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="product" className="form-label">Pilih Produk</label>
                                            <select className="form-select" id="product" onChange={handleProductChange} value={selectedProduct}>
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
