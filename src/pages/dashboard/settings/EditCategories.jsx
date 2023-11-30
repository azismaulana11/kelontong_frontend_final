import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import DashboardLayout from '../../../layout/DashboardLayout'
import HeadingTitle from '../../../components/dashboard/HeadingTitle'


export default function EditCategories() {
    const [categoryName, setCategoryName] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:7601/api/v1/settings/categories/${id}`)
            .then(response => {
                setCategoryName(response.data.name);
            })
            .catch(error => {
                console.error('Error fetching Rewards:', error);
            });
    }, []);

    
    const handleSubmit = async () => {
        try {
            await axios.put(`http://localhost:7601/api/v1/settings/categories/${id}`, {
                name: categoryName
            })
        }
        catch (error) {
            console.error('Error fetching products:', error);
        }
    }



    return (
        <>
            <DashboardLayout>
                <HeadingTitle title='Edit Kategori'>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "white" }}>Settings</li>
                    <li className="breadcrumb-item"><Link to="/dashboard/settings/categories" style={{ color: "white" }}>Kategori</Link></li>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Edit category</li>
                </HeadingTitle>

                <div className="p-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card w-100">
                                <div className="card-body">
                                    <div className="mb-3 fs-4">
                                        Edit Kategori
                                    </div>
                                    <form onSubmit={() => {
                                        handleSubmit(),
                                        navigate('/dashboard/settings/categories')
                                        }}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Nama Kategori</label>
                                            <input type="text" className="form-control" id="category" value={categoryName} required onChange={(e) => (setCategoryName(e.target.value))} />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/dashboard/settings/categories" className="btn btn-danger me-3">Kembali</Link>
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
