import HeadingTitle from "../../../components/dashboard/HeadingTitle";
import DashboardLayout from "../../../layout/DashboardLayout";

export default function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5500/api/v1/products");
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    
    return (
        <DashboardLayout>
            <HeadingTitle title="Produk">
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Produk</li>
            </HeadingTitle>
        </DashboardLayout>
    )
}