import React from 'react'

const OrdersByTime = () => {
    const ordersData = [
        { day: 'Mon', time: '1:00 PM', orders: 10 },
        { day: 'Mon', time: '2:00 PM', orders: 15 },
        { day: 'Mon', time: '3:00 PM', orders: 29 },
        // Add more data for each day and time...
      ];
    
      // Function to determine the background color based on the number of orders
      const getHeatmapColor = (orders) => {
        if (orders > 20) return 'bg-blue-600';
        if (orders > 10) return 'bg-blue-400';
        if (orders > 5) return 'bg-blue-200';
        return 'bg-blue-100';
      };
    
      return (
        <section className="p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Orders</h3>
          <div className="grid grid-cols-8 gap-2">
            {/* Time Labels */}
            <div></div> {/* Empty cell for alignment */}
            <div className="text-center text-gray-500">1:00 PM</div>
            <div className="text-center text-gray-500">2:00 PM</div>
            <div className="text-center text-gray-500">3:00 PM</div>
            <div className="text-center text-gray-500">4:00 PM</div>
            <div className="text-center text-gray-500">5:00 PM</div>
            <div className="text-center text-gray-500">6:00 PM</div>
            <div className="text-center text-gray-500">7:00 PM</div>
    
            {/* Heatmap rows */}
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <React.Fragment key={day}>
                <div className="text-left text-gray-500 flex items-center justify-start">{day}</div>
                {['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'].map((time) => {
                  const orders = ordersData.find(d => d.day === day && d.time === time)?.orders || 0;
                  return (
                    <div
                      key={time}
                      className={`h-10 w-full ${getHeatmapColor(orders)} rounded-lg flex items-center justify-center text-white`}
                    >
                     
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </section>
      );
}

export default OrdersByTime