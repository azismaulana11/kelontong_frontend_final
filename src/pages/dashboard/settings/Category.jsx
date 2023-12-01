import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SweetAlert2 from 'react-sweetalert2';


import HeadingTitle from "../../../components/dashboard/HeadingTitle";
import DashboardLayout from "../../../layout/DashboardLayout";


export default function Category() {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        axios.get('http://localhost:7600/api/v1/settings/categories')
            .then(response => {
                setCategories(response.data);
                // console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching Rewards:', error);
            });
    }, []);

    const handleDelete = (id) => async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:7600/api/v1/settings/categories/${id}`);
            setCategories(categories.filter((category) => category._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

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
                                <div className='table border-2 shadow-sm w-100'>
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
                                                            <td>{id + 1}</td>
                                                            <td>{category._id}</td>
                                                            <td>{category.name}</td>
                                                            <td className="d-flex justify-center column-gap-2" role='button'>
                                                                <Link to={`/dashboard/settings/categories/edit/${category._id}`}><i className="bi bi-pen"></i></Link>
                                                                <form onSubmit={handleDelete(category._id)}>
                                                                    <button type="submit" className="border-0 bg-transparent">
                                                                        <i className="bi bi-trash"></i>
                                                                    </button>
                                                                </form>
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
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}
