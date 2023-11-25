import DashboardLayout from '../../../layout/DashboardLayout';
import penjualanIcon from '../../../assets/img/dashboard/penjualan.svg'
import produkIcon from '../../../assets/img/dashboard/produk.svg'
import catIcon from '../../../assets/img/dashboard/cart.svg'
import pelangganIcon from '../../../assets/img/dashboard/pelanggan.svg'
import CardMenu from "../../../components/dashboard/homepage/CardMenu";
import { useMediaQuery } from 'react-responsive'
import ProgresBar from "../../../components/dashboard/homepage/ProgresBar";
import TransactionItem from "../../../components/dashboard/homepage/TransactionItem";

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

const labels = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', "Agustus", "September", "Oktober", "November", "Desember"];

const dataProfit = [1500000, 2300000, 900000, 3500000, 500000, 4200000, 1800000, 1200000, 3200000, 2400000, 5500000, 700000]
const dataLoss = [200000, 120000, 250000, 135000, 198000, 260000, 110000, 90000, 80000, 140000, 155000, 160000]

export const data = {
    labels,
    datasets: [
        {
            label: 'Pemasukan',
            data: dataProfit,
            backgroundColor: '#624BFF',
        },
        {
            label: 'Pengeluaran',
            data: dataLoss,
            backgroundColor: '#E3E7FC',
        },
    ],
};

// Total pendapatan bulan ini
const monthNow = new Date().getMonth()
const formatRupiah = (angka) => {
    let number_string = angka.toString().replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi)
    if (ribuan) {
        let separator = sisa ? '.' : ''
        rupiah += separator + ribuan.join('.')
    }
    return split[1] !== undefined ? rupiah + ',' + split[1] : rupiah
}
const totalIncome = dataProfit[monthNow]

// Total pendapatan bulan kemarin dan persentase
const lastMonth = monthNow - 1
const lastMonthIncome = dataProfit[lastMonth]
const percentIncome = (totalIncome - lastMonthIncome) / lastMonthIncome * 100
// console.log(totalIncome, lastMonthIncome, percentIncome)

export default function Homepage() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 992px)' })
    const cardMenuItem = [
        { title: "Produk", value: 38, icon: produkIcon },
        { title: "Penjualan", value: 120, icon: penjualanIcon },
        { title: "Pelanggan", value: 20, icon: pelangganIcon },
        { title: "Checkout", value: 12, icon: catIcon },
    ]
    const productSold = [
        { name: "Beras", value: 60 },
        { name: "Gula", value: 80 },
        { name: "Minyak", value: 20 },
        { name: "Telur", value: 40 },
        { name: "Sabun", value: 70 },
        { name: "Shampoo", value: 90 },
    ]
    const transactions = [
        {
            id: 1,
            product: "Beras",
            orderId: "123456789",
            date: "12/12/2021",
            customerName: "John Doe",
            status: "Sukses",
            amount: 1
        },
        {
            id: 2,
            product: "Gula",
            orderId: "123456789",
            date: "12/12/2021",
            customerName: "John Doe",
            status: "Sukses",
            amount: 1
        },
        {
            id: 3,
            product: "Minyak",
            orderId: "123456789",
            date: "12/12/2021",
            customerName: "John Doe",
            status: "Sukses",
            amount: 1
        },
        {
            id: 4,
            product: "Telur",
            orderId: "123456789",
            date: "12/12/2021",
            customerName: "John Doe",
            status: "Sukses",
            amount: 1
        },
        {
            id: 5,
            product: "Sabun",
            orderId: "123456789",
            date: "12/12/2021",
            customerName: "John Doe",
            status: "Sukses",
            amount: 1
        },
        {
            id: 6,
            product: "Shampoo",
            orderId: "123456789",
            date: "12/12/2021",
            customerName: "John Doe",
            status: "Sukses",
            amount: 1
        },
    ]
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
                        {/* total pendapatan */}
                        <div className="col-lg-7 mb-4">
                            <div className="card border-0 shadow-sm w-100">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="fw-bold" style={{ fontSize: "24px" }}>Total Pendapatan</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center column-gap-3">
                                        <div>
                                            <span className="fw-bold" style={{ fontSize: "36px" }}>Rp. {formatRupiah(totalIncome)}</span>
                                        </div>
                                        <div>
                                            <span className="fw-bold" style={{ fontSize: "15px", color: "green" }}>{percentIncome.toFixed(1)}% dari bulan kemarin</span>
                                        </div>
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
                                    <span className="fw-bold" style={{ fontSize: "24px" }}>Barang paling terjual</span>
                                    {
                                        productSold.map((item, index) => (
                                            <ProgresBar key={index} name={item.name} value={item.value} />
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
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Produk</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>OrderId</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Tanggal</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Nama Pelanggan</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Status</th>
                                                    <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Jumlah</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    transactions.map((item, index) => (
                                                        <TransactionItem key={index} product={item.product} orderId={item.orderId} date={item.date} customerName={item.customerName} status={item.status} amount={item.amount} />
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