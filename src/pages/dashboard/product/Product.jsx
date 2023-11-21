import HeadingTitle from "../../../components/dashboard/HeadingTitle";
import DashboardLayout from "../../../layout/DashboardLayout";

export default function Product() {
    return (
        <DashboardLayout>
            <HeadingTitle title="Produk">
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Produk</li>
            </HeadingTitle>
        </DashboardLayout>
    )
}