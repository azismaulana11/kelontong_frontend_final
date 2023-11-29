import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HeadingTitle from "../../../components/dashboard/HeadingTitle";
import DashboardLayout from "../../../layout/DashboardLayout";
import axios from "axios";
import SweetAlert2 from 'react-sweetalert2';
import EditCategories from './EditCategories';

export default function Category() {
    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:7600/api/v1/settings/categories')
            .then(response => {
                setCategories(response.data.data);
                // console.log(response.data.data)
            })
            .catch(error => {
                console.error('Error fetching Rewards:', error);
            });
    }, []);

    const handleGetSubcategories = async (id) => {
        try {
            await axios.get(`http://localhost:7600/api/v1/settings/categories/${id}`)
                .then(response => {
                    console.log('subcategori masuk nih', response.data.data.subcategories)
                    setSubCategories(response.data.data.subcategories)
                })
        } catch (error) {

        }
    }

    return (
        <>
            <DashboardLayout>
                <HeadingTitle title="Kategori">
                    <li className="breadcrumb-item" aria-current="page" style={{ color: "white" }}>Settings</li>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Kategori</li>
                </HeadingTitle>

                <div className='p-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div>
                                <Link to='add' className='btn btn-sm btn-primary p-2 mb-3 fw-bold' style={{ background: "#624BFF", outline: "none", border: "none" }}>Tambah</Link>
                            </div>

                            <div className=" tabel wrapper d-flex justify-content space-between m-2">
                                <div className='table border-2 shadow-sm w-50'>
                                    <div className='fs-4 fw-bold' style={{ color: '#637381' }}>Kategori</div>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>No</th>
                                                        <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>id</th>
                                                        <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Nama</th>
                                                        <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}></th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {categories.map((category, id) => (
                                                        <tr key={id} role='button'>
                                                            <td onClick={() => (handleGetSubcategories(category._id))}>{id + 1}</td>
                                                            <td onClick={() => (handleGetSubcategories(category._id))}>{category._id}</td>
                                                            <td onClick={() => (handleGetSubcategories(category._id))}>{category.name}</td>
                                                            <td className="d-flex justify-center column-gap-2" role='button'>
                                                                <Link to={'/dashboard/settings/categories/edit'}><i className="bi bi-pen"></i></Link>
                                                                <i class="bi bi-trash"></i>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    {categories.length === 0 && (
                                                        <tr>
                                                            <td colSpan="7" className="py-5 fw-bold text-center" style={{ color: "#637381" }}>Tidak ada Kategori</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className='table border-2 shadow-sm w-50 ms-4'>
                                    <div className='fs-4 fw-bold' style={{ color: '#637381' }}>Subkategori</div>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>No</th>
                                                        <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>id</th>
                                                        <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Nama</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {subCategories === null ?
                                                        <tr>
                                                            <td colSpan="7" className="py-5 fw-bold text-center" style={{ color: "#637381" }}>Tidak ada Subkategori</td>
                                                        </tr> : subCategories.map((subCategory, id) => (
                                                            <tr key={id}>
                                                                <td>{id + 1}</td>
                                                                <td>{subCategory._id}</td>
                                                                <td>{subCategory.name}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}
