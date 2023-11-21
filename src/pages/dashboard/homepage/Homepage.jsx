import DashboardLayout from "../../../layout/DashboardLayout";
import penjualanIcon from '../../../assets/img/dashboard/penjualan.svg'
import produkIcon from '../../../assets/img/dashboard/produk.svg'
import catIcon from '../../../assets/img/dashboard/cart.svg'
import pelangganIcon from '../../../assets/img/dashboard/pelanggan.svg'
import CardMenu from "../../../components/dashboard/homepage/CardMenu";
import { useMediaQuery } from 'react-responsive'

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
        </DashboardLayout>
    )
}