import React, { useState } from 'react';
import DashboardLayout from '../../../layout/DashboardLayout';
import HeadingTitle from '../../../components/dashboard/HeadingTitle';

function StockBarang() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [stockData, setStockData] = useState({
    January: {
      'Gula Pasir': { initialStock: 260, finalStock: 10 },
      'Minyak': { initialStock: 150, finalStock: 20 },
      // Tambahkan data barang lainnya jika diperlukan
    },
    February: {
      'Gula Pasir': { initialStock: 270, finalStock: 15 },
      'Minyak': { initialStock: 160, finalStock: 25 },
      // Tambahkan data barang lainnya jika diperlukan
    },
    March: {
      'Gula Pasir': { initialStock: 280, finalStock: 20 },
      'Minyak': { initialStock: 170, finalStock: 30 },
      // Tambahkan data barang lainnya jika diperlukan
    },
    // Tambahkan bulan lainnya jika diperlukan
  });

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleMonthChange = (e) => {
    const selectedMonthValue = e.target.value;
    setSelectedMonth(selectedMonthValue);
  };

  const filteredData = () => {
    if (!selectedMonth) {
      return [];
    }

    // Filter data berdasarkan pencarian dan bulan yang dipilih
    const filteredBySearch = Object.entries(stockData[selectedMonth]).filter(([barang]) =>
      barang.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredBySearch;
  };

  return (
    <DashboardLayout>
      <HeadingTitle title="Stock Barang">
        <li className="breadcrumb-item active" aria-current="page" style={{ color: 'black' }}>
          Stock Barang
        </li>
      </HeadingTitle>
      <div className="mt-2" style={{ marginBottom: '20px', display: 'flex' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search Barang"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginRight: '10px', width: '180px' }}
        />
        <select
          className="form-select"
          aria-label="Default select example"
          style={{ width: '180px' }}
          onChange={handleMonthChange}
        >
          <option defaultValue>Select Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          {/* Tambahkan nama bulan lainnya jika diperlukan */}
        </select>
      </div>

      {selectedMonth && (
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
                            Nama Barang
                          </th>
                          <th className="text-light fw-bold" scope="col" style={{ background: '#624BFF' }}>
                            Stock Awal
                          </th>
                          <th className="text-light fw-bold" scope="col" style={{ background: '#624BFF' }}>
                            Stock Akhir
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData().map(([barang, data]) => (
                          <tr key={barang}>
                            <td>{barang}</td>
                            <td>{data.initialStock}</td>
                            <td>{data.finalStock}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default StockBarang;
