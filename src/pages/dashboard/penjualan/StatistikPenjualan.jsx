import React, { useState } from 'react';
import DashboardLayout from '../../../layout/DashboardLayout';
import HeadingTitle from '../../../components/dashboard/HeadingTitle';

function StatistikPenjualan() {
  const [showSecondFilter, setShowSecondFilter] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [incomeByMonth, setIncomeByMonth] = useState({
    January: 1500000,
    February: 1600000,
    March: 1700000,
    // Tambahkan nilai bulan lainnya jika diperlukan
  });

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    // Jika opsi pertama dipilih, tampilkan filter kedua
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
          {/* Elemen filter kedua (nama-nama bulan) */}
          <div className="mt-2" style={{ marginBottom: '20px' }}>
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ width: '180px' }}
              onChange={handleMonthChange}
            >
              <option defaultValue>Bulan</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              {/* Tambahkan nama bulan lainnya jika diperlukan */}
            </select>
          </div>

          {selectedMonth && (
            <div>
              <p>
                Pendapatan untuk {selectedMonth}: Rp.{incomeByMonth[selectedMonth].toLocaleString()}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card border-0 shadow-sm d-flex flex-column w-75">
              <div className="card-body p-0 d-flex flex-column align-items-end">
                <div className="table-responsive" style={{ margin: '20px 0', width: '100%' }}>
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="text-light fw-bold" scope="col" style={{ background: '#624BFF' }}>
                          ID
                        </th>
                        <th className="text-light fw-bold" scope="col" style={{ background: '#624BFF' }}>
                          Tanggal Transaksi
                        </th>
                        <th className="text-light fw-bold" scope="col" style={{ background: '#624BFF' }}>
                          Jumlah Penjualan
                        </th>
                        <th className="text-light fw-bold" scope="col" style={{ background: '#624BFF' }}>
                          Pendapatan(RP)
                        </th>
                        <th className="text-light fw-bold" scope="col" style={{ background: '#624BFF' }}>
                          Harga (Rp)
                        </th>
                        <th className="text-light fw-bold" scope="col" style={{ background: '#624BFF' }}>
                          Jumlah Produk Terjual
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1 September 2023</td>
                        <td>10</td>
                        <td>5000000</td>
                        <td>250000</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2 September 2023</td>
                        <td>15</td>
                        <td>7500000</td>
                        <td>200000</td>
                        <td>40</td>
                      </tr>
                      {/* Tambahkan baris data lainnya jika diperlukan */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StatistikPenjualan;
