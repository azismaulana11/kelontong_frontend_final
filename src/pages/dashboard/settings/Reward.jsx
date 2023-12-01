import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import SweetAlert2 from 'react-sweetalert2'

import HeadingTitle from "../../../components/dashboard/HeadingTitle"
import DashboardLayout from "../../../layout/DashboardLayout"


export default function Reward() {
    const [rewards, setRewards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:7600/api/v1/settings/rewards')
            .then(response => {
                setRewards(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching Rewards:', error);
            });
    }, []);

    return (
        <>
            <DashboardLayout>
                <HeadingTitle title="Rewards">
                    <li className="breadcrumb-item" aria-current="page" style={{ color: "white" }}>Settings</li>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Reward</li>
                </HeadingTitle>

                <div className='p-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div>
                                <Link to='add' className='btn btn-sm btn-primary p-2 mb-3 fw-bold' style={{ background: "#624BFF", outline: "none", border: "none" }}>Tambah</Link>
                            </div>

                            <div className="card border-0 shadow-sm w-100">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>No</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Id</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Nama</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {rewards.map((reward, id) => (
                                                    <tr key={id}>
                                                        <td>{id + 1}</td>
                                                        <td>{reward._id}</td>
                                                        <td>{reward.rewards.name}</td>
                                                        <td className="d-flex justify-center column-gap-2" role='button'>
                                                            <Link to={`/dashboard/settings/rewards/edit/${reward._id}`}><i className="bi bi-pen"></i></Link>
                                                            <form>
                                                                <button type="submit" className="border-0 bg-transparent">
                                                                    <i className="bi bi-trash"></i>
                                                                </button>
                                                            </form>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {rewards.length === 0 && (
                                                    <tr>
                                                        <td colSpan="7" className="py-5 fw-bold text-center" style={{ color: "#637381" }}>Tidak ada Rewarding</td>
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
            </DashboardLayout>
        </>
    )
}
