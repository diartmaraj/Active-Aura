import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TopCategories = () => {
    const data = {
        labels: ['Headphones', 'TVs', 'Phones', 'Consoles', 'Smartwatches'],
        datasets: [
          {
            label: 'Top Categories',
            data: [4958.19, 4582.94, 3684.45, 3059.22, 2457.78], // Example data
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
              padding: 20,
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || '';
                let value = context.raw || 0;
                return `${label}: $${value.toLocaleString()}`;
              },
            },
          },
        },
      };
    
      return (
        <section className="h-full w-full flex flex-col items-center justify-center ">
            <h1 className='self-start p-4'>Top Categories</h1>
          <div className="relative h-full w-full">
            <Doughnut data={data} options={options} />
          </div>
        </section>
      );
}

export default TopCategories