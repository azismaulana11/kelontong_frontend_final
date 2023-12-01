export default function TransactionItem({ orderId, date, customerName, status, amount }) {
    return (
        <tr>
            <td>{orderId}</td>
            <td>{new Date(date).toLocaleDateString('id-ID')}</td>
            <td>{customerName}</td>
            <td><span className={`badge
            ${status === 'paid' ? 'bg-success' :
                    status === 'pending' ? 'bg-warning' : 'bg-danger'
                }`}>{status}</span></td>
            <td>Rp. {amount.toLocaleString()}</td>
        </tr>
    )
}