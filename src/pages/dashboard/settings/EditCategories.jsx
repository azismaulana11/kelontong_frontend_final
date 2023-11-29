import React from 'react'
import { Link } from 'react-router-dom'

import DashboardLayout from '../../../layout/DashboardLayout'
import HeadingTitle from '../../../components/dashboard/HeadingTitle'

export default function EditCategories() {
    return (
        <>
            <DashboardLayout>
                <HeadingTitle title='Edit Kategori'>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "white" }}>Settings</li>
                    <li className="breadcrumb-item"><Link to="/dashboard/settings/categories" style={{ color: "white" }}>Kategori</Link></li>
                    <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Edit category</li>
                </HeadingTitle>

                
            </DashboardLayout>
        </>
    )
}
