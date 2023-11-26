export default function Checkout() {
    const user = {
        name: "Jhon",
        phone: "081234567890",
        address: "Jl. Raya Bogor KM 30"
    }
    const products = [
        {
            name: "Beras",
            quantity: 1,
            price: 65000,
            image: "https://berashotel.com/wp-content/uploads/BERAS-MERAH-2KG.png"
        },
        {
            name: "Gula",
            quantity: 3,
            price: 15000,
            image: "https://media.monotaro.id/mid01/big/Perlengkapan%20Dapur%20%26%20Horeka/Makanan/Bahan%20Masak/Gulaku%20Gula%20Pasir%20Premium%20Putih/80P101558288-34.jpg"
        },
        {
            name: "Minyak Goreng",
            quantity: 2,
            price: 20000,
            image: "https://o-cdn-cas.sirclocdn.com/parenting/images/Sunco_Minyak.width-800.format-webp.webp"
        },
        {
            name: "Telur",
            quantity: 5,
            price: 34000,
            image: "https://www.astronauts.id/blog/wp-content/uploads/2022/08/Astro-Goods-Farmers-Omega-3-Eggs-2-1024x683.png"
        },
        {
            name: "Susu",
            quantity: 2,
            price: 15000,
            image: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/06/B600252-4-Varian-Rasa-Susu-Zee-Vanilla-Twist.jpg"
        },
        {
            name: "Teh",
            quantity: 3,
            price: 7000,
            image: "https://www.tehsariwangi.com/uploads/product/7/6e27173e5f86c20a033aaeb7284da671.png"
        },
        {
            name: "Kopi",
            quantity: 2,
            price: 15000,
            image: "https://swamediainc.storage.googleapis.com/swa.co.id/wp-content/uploads/2020/07/21141144/Indocofe-Coffeemix.jpg"
        },
        {
            name: "Sabun",
            quantity: 5,
            price: 16000,
            image: "https://images.soco.id/937-soap-bar.jpg.jpeg"
        },
        {
            name: "Shampoo",
            quantity: 2,
            price: 15000,
            image: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/09/25/3603630647.jpg"
        }
    ]

    // Total belanja
    const [totalNoShipping, setTotalNoShipping] = useState(0)
    const [totalAfterShipping, setTotalAfterShipping] = useState(0)

    useEffect(() => {
        const totalPrice = products.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
        setTotalNoShipping(totalPrice)
        setTotalAfterShipping(totalPrice)
    }, [])

    // Ongkos kirim
    const [selectedShipping, setSeletectShipping] = useState("")
    const shippings = [
        {
            name: "Instant",
            price: 30000
        },
        {
            name: "Same Day",
            price: 20000
        },
        {
            name: "Express",
            price: 10000
        },
        {
            name: "Economy",
            price: 0
        }
    ]
    const handleShipping = (e) => {
        const shipping = e.target.textContent.split(" - ")
        setSeletectShipping(shipping[0])
        const shippingPrice = shippings.find((item) => item.name === shipping[0])
        const total = shippingPrice.price + products.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
        setTotalAfterShipping(total)
    }

    return (
        <>

        </>
    )
}