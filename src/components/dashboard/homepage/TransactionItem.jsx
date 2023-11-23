export default function TransactionItem({ product, orderId, date, customerName, status, amount}) {
    return (
        <tr>
            <td>{product}</td>
            <td>{orderId}</td>
            <td>{date}</td>
            <td>{customerName}</td>
            <td><span className="badge bg-success">{status}</span></td>
            <td>{amount}</td>
        </tr>
    )
}