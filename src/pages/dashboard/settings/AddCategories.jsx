import React, { useState }  from 'react'
import { Await, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import DashboardLayout from '../../../layout/DashboardLayout'
import HeadingTitle from '../../../components/dashboard/HeadingTitle'

export default function AddCategories() {
    const [Categories, setCategories] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:7601/api/v1/settings/categories', {
                name: Categories
            })
        }
        catch (error) {
            console.error('Error fetching products:', error);
        }
    }
    

    return (
        <>
            <DashboardLayout>
                <HeadingTitle title='Tambah Kategori'>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "white" }}>Settings</li>
                    <li className="breadcrumb-item"><Link to="/dashboard/settings/categories" style={{ color: "white" }}>Kategori</Link></li>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Add category</li>
                </HeadingTitle>

                <div className="p-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card w-100">
                                <div className="card-body">
                                    <div className="mb-3 fs-4">
                                        Masukkan Kategori
                                    </div>
                                    <form onSubmit={() => {
                                        handleSubmit(),
                                        navigate('/dashboard/settings/categories')
                                        }}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Nama Kategori</label>
                                            <input type="text" className="form-control" id="category" value={Categories} onChange={(e) => (setCategories(e.target.value))}/>
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
