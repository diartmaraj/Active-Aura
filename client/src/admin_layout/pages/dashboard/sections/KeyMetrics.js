import React from 'react'

const KeyMetrics = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* Total Sales */}
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
        <p className="mt-2 text-2xl font-bold text-gray-900">$58,728.35</p>
        <span className="inline-block mt-1 px-2 py-1 text-sm font-medium text-green-800 bg-green-200 rounded">
          +10.8%
        </span>
      </div>

      {/* Total Orders */}
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
        <p className="mt-2 text-2xl font-bold text-gray-900">$34,906.89</p>
        <span className="inline-block mt-1 px-2 py-1 text-sm font-medium text-red-800 bg-red-200 rounded">
          -3.5%
        </span>
      </div>

      {/* Total Revenue */}
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
        <p className="mt-2 text-2xl font-bold text-gray-900">$45,624.92</p>
        <span className="inline-block mt-1 px-2 py-1 text-sm font-medium text-green-800 bg-green-200 rounded">
          +7.2%
        </span>
      </div>
    </section>
  )
}

export default KeyMetrics