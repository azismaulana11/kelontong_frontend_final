import React, { useState }  from 'react'
import { Await, Link } from 'react-router-dom'
import axios from 'axios'

import DashboardLayout from '../../../layout/DashboardLayout'
import HeadingTitle from '../../../components/dashboard/HeadingTitle'

export default function AddCategories() {
    const [Categories, setCategories] = useState('')
    const [subCategories, setSubCategories] = useState('')
    console.log(Categories, subCategories)

    const handleSubmit = async() => {
        await axios.post('http://localhost:7600/api/v1/settings/categories')
        .then(response => {
            setCategories(response.data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
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
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Nama Kategori</label>
                                            <input type="text" className="form-control" id="category" onChange={(e) => (setCategories(e.target.value))}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Nama Subkategori</label>
                                            <div className='d-flex align-items-center'>
                                            <input type="text" className="form-control" id="subcategory" onChange={(e) => (setSubCategories(e.target.value))}/>
                                            <i className="bi bi-trash fs-4"></i>
                                            </div>
                                        </div>
                                        <div className='mb-3 d-flex justify-content-center'>
                                            <button className='btn btn-primary' style={{ background : '#624BFF' }}><i className="bi bi-plus-lg"></i></button>
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
