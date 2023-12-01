import DashboardLayout from '../../../layout/DashboardLayout';
import penjualanIcon from '../../../assets/img/dashboard/penjualan.svg'
import produkIcon from '../../../assets/img/dashboard/produk.svg'
import catIcon from '../../../assets/img/dashboard/cart.svg'
import pelangganIcon from '../../../assets/img/dashboard/pelanggan.svg'
import CardMenu from "../../../components/dashboard/homepage/CardMenu";
import { useMediaQuery } from 'react-responsive'
import TransactionItem from "../../../components/dashboard/homepage/TransactionItem";
import SoldProduct from '../../../components/dashboard/homepage/SoldProduct';
import axios from 'axios';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
};


export default function Homepage() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 992px)' })

    // get total products
    const [totalProducts, setTotalProducts] = useState("")
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:7600/api/v1/products/total-product')
                setTotalProducts(response.data.total)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

    // get total orders with status paid
    const [totalOrders, setTotalOrders] = useState("")
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:7600/api/v1/orders/status/paid')
                setTotalOrders(response.data.total)
            } catch (error) {
                console.log(error)
            }
        }
        fetchOrders()
    }, [])

    // get total customers
    const [totalCustomers, setTotalCustomers] = useState("")
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:7600/api/v1/orders/by-customer')
                setTotalCustomers(response.data.totalCustomers)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCustomers()
    }, [])

    // get total checkout
    const [totalCheckout, setTotalCheckout] = useState("")
    useEffect(() => {
        const fetchCheckout = async () => {
            try {
                const response = await axios.get('http://localhost:7600/api/v1/orders/status/pending')
                setTotalCheckout(response.data.total)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCheckout()
    }, [])

    const cardMenuItem = [
        { title: "Produk", value: totalProducts, icon: produkIcon },
        { title: "Penjualan", value: totalOrders, icon: penjualanIcon },
        { title: "Pelanggan", value: totalCustomers, icon: pelangganIcon },
        { title: "Checkout", value: totalCheckout, icon: catIcon },
    ]


    // get sold products
    const [soldProducts, setSoldProducts] = useState([])
    useEffect(() => {
        const fetchSoldProducts = async () => {
            try {
                const response = await axios.get('http://localhost:7600/api/v1/orders/sold-products')
                setSoldProducts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSoldProducts()
    }, [])

    // get last transactions
    const [lastTransactions, setLastTransactions] = useState([])
    useEffect(() => {
        const fetchLastTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:7600/api/v1/orders/latest-orders')
                setLastTransactions(response.data)
                // console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchLastTransactions()
    }, [])


    // get sales amount
    const [salesAmount, setSalesAmount] = useState([])
    useEffect(() => {
        const fetchSalesAmount = async () => {
            try {
                const response = await axios.get('http://localhost:7600/api/v1/orders/monthly-sales')
                setSalesAmount(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSalesAmount()
    }, [])

    const labels = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', "Agustus", "September", "Oktober", "November", "Desember"];

    const data = {
        labels,
        datasets: [
            {
                label: 'Pemasukan',
                data: salesAmount,
                backgroundColor: '#624BFF',
            },
        ],
    };

    // Total pendapatan bulan ini
    const monthNow = new Date().getMonth()

    const totalSales = salesAmount[monthNow];

    // Total pendapatan bulan kemarin dan persentase
    // const lastMonth = monthNow - 1
    // const lastMonthIncome = salesAmount[lastMonth]
    // const percentIncome = ((totalSales - lastMonthIncome) / lastMonthIncome) * 100
    // console.log(totalSales, lastMonthIncome, percentIncome)

    return (
        <DashboardLayout>
            <div className="p-4 position-relative" style={{ height: isDesktopOrLaptop ? "200px" : "100%", backgroundColor: "#624BFF" }}>
                <span className="fw-bold text-light" style={{ fontSize: "26px" }}>Dashboard</span>
                <div className={`container ${isDesktopOrLaptop ? 'position-absolute' : 'pt-4'} start-0 end-0 `} style={{ bottom: "-30px" }}>
                    <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-4 ${isDesktopOrLaptop ? '' : 'row-gap-3'}`}>
                        {cardMenuItem.map((item, index) => (
                            <CardMenu key={index} title={item.title} value={item.value} icon={item.icon} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="container">
                    <div className="row mb-3">
                        {/* total penjualan */}
                        <div className="col-lg-7 mb-4">
                            <div className="card border-0 shadow-sm w-100">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="fw-bold" style={{ fontSize: "24px" }}>Total Pendapatan</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center column-gap-3">
                                        <div>
                                            <span className="fw-bold" style={{ fontSize: "36px" }}>Rp. {totalSales?.toLocaleString()}</span>
                                        </div>
                                        {/* <div>
                                            <span className="fw-bold" style={{ fontSize: "15px", color: "green" }}>
                                                <i className={
                                                    percentIncome > 0 ? "bi bi-arrow-up text-success me-2" : "bi bi-arrow-down text-danger me-2"
                                                }></i>

                                                <span className={
                                                    percentIncome > 0 ? "text-success ms-1" : "text-danger ms-1"
                                                }>{percentIncome}% dari bulan kemarin</span>
                                            </span>
                                        </div> */}
                                    </div>
                                    <div className="chart">
                                        <Bar options={options} data={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* barang terjual */}
                        <div className="col-lg-5">
                            <div className="card p-2 border-0 shadow-sm w-100">
                                <div className="card-body d-flex flex-column row-gap-3">
                                    <span className="fw-bold mb-3" style={{ fontSize: "24px" }}>Barang paling banyak terjual</span>
                                    {
                                        soldProducts.map((item, index) => (
                                            <SoldProduct key={index} product={item.product} sold={item.sold} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* table */}
                    <div className="row">
                        {/* create table to see last transaction */}
                        <div className="col-12">
                            <div className="card border-0 shadow-sm w-100">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="fw-bold" style={{ fontSize: "18px" }}>Transaksi Terakhir</span>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>OrderId</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Tanggal</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Nama Pelanggan</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Status</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Jumlah</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    lastTransactions.map((item, index) => (
                                                        <TransactionItem key={index} orderId={item._id} date={item.createdAt} customerName={item.customer.name} status={item.status} amount={item.total} />
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
    )
}