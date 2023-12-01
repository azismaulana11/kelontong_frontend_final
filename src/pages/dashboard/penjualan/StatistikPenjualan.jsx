// StatistikPenjualan.js

import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../../layout/DashboardLayout';
import HeadingTitle from '../../../components/dashboard/HeadingTitle';
import { fetchDataTransaksi } from '../../../services';

function StatistikPenjualan() {
  const [showSecondFilter, setShowSecondFilter] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [incomeByMonth, setIncomeByMonth] = useState({});
  const [transactionData, setTransactionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchDataTransaksi(2023, selectedMonth);
        setTransactionData(data?.data || []); // Mengasumsikan data berupa array di dalam objek response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching transaction data:', error);
        setLoading(false);
        // Tangani kesalahan jika diperlukan
      }
    };

    if (selectedMonth) {
      fetchData();
    }
  }, [selectedMonth]);

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    setShowSecondFilter(selectedValue === '1');
  };

  const handleMonthChange = (e) => {
    const selectedMonthValue = e.target.value;
    setSelectedMonth(selectedMonthValue);
  };

  return (
    <DashboardLayout>
      <HeadingTitle title="Statistik Penjualan">
        <li className="breadcrumb-item active" aria-current="page" style={{ color: 'black' }}>
          Statistik Penjualan
        </li>
      </HeadingTitle>
      <div className="mt-2" style={{ marginBottom: '20px' }}>
        <select
          className="form-select"
          aria-label="Default select example"
          style={{ width: '180px' }}
          onChange={handleFilterChange}
        >
          <option defaultValue>Filter</option>
          <option value="1">Bulanan</option>
        </select>
      </div>

      {showSecondFilter && (
        <div>
          <div className="mt-2" style={{ marginBottom: '20px' }}>
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ width: '180px' }}
              onChange={handleMonthChange}
            >
              <option defaultValue>Bulan</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">Mei</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
              {/* Tambahkan nama bulan lainnya jika diperlukan */}
            </select>
          </div>

          {selectedMonth && (
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div>
                  <p>
                    Total Penjualan untuk {monthNames[selectedMonth - 1]}: Rp.
                    {transactionData[0]?.total_penjualan_rp?.toLocaleString()}
                  </p>

                  <div className="table-responsive" style={{ margin: '20px 0', width: '100%' }}>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th
                            className="text-light fw-bold"
                            scope="col"
                            style={{ background: '#624BFF' }}
                          >
                            ID
                          </th>
                          <th
                            className="text-light fw-bold"
                            scope="col"
                            style={{ background: '#624BFF' }}
                          >
                            Tanggal Transaksi
                          </th>
                          <th
                            className="text-light fw-bold"
                            scope="col"
                            style={{ background: '#624BFF' }}
                          >
                            Jumlah Penjualan
                          </th>
                          <th
                            className="text-light fw-bold"
                            scope="col"
                            style={{ background: '#624BFF' }}
                          >
                            Total Penjualan(RP)
                          </th>
                          {/* <th
                            className="text-light fw-bold"
                            scope="col"
                            style={{ background: '#624BFF' }}
                          >
                            Harga (Rp)
                          </th> */}
                          <th
                            className="text-light fw-bold"
                            scope="col"
                            style={{ background: '#624BFF' }}
                          >
                            Jumlah Produk Terjual
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(transactionData) && transactionData.length > 0 ? (
                          transactionData.map((transaction) => (
                            <tr key={transaction._id}>
                              <td>{transaction._id}</td>
                              <td>{transaction.tanggal_transaksi}</td>
                              <td>Rp. {transaction.jumlah_penjualan}</td>
                              <td>RP. {transaction.total_penjualan_rp}</td>
                              {/* <td>{transaction.harga}</td> */}
                              <td>{transaction.jumlah_produk_terjual}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6">Tidak ada data transaksi untuk bulan ini.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </DashboardLayout>
  );
}

export default StatistikPenjualan;
