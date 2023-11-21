import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../../../layouts/DashboardLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import SweetAlert2 from 'react-sweetalert2';
import HeadingTitle from "../../../components/dashboard/HeadingTitle";

export default function EditProduct() {
   return (
        <DashboardLayout>
            <SweetAlert2 {...swalProps} />
        </DashboardLayout>
    )
}