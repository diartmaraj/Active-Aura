    import React from 'react'
    import NavBar from '../../components/NavBar'
    import SideBar from '../../components/SideBar'
    import KeyMetrics from './sections/KeyMetrics'
    import OrdersByTime from './sections/OrdersByTime'
    import OrdersOverview from './sections/OrdersOverview'
    import TopCategories from './sections/TopCategories'
    import TopSellingProducts from './sections/TopSellingProducts'

    const Dashboard = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/6 bg-white shadow-lg rounded-l-xl">
        <SideBar />
      </div>

      <div className="w-5/6 flex flex-col">
     
        <div className="bg-white shadow-lg rounded-tr-xl p-4">
          <NavBar />
        </div>

        <div className="flex-grow grid grid-cols-12 gap-4 p-4">
          
   
          <div className="col-span-8 grid grid-rows-20 gap-4">

            <div className="">
              <KeyMetrics />
            </div>
            <div className="bg-white shadow-lg row-span-10 rounded-lg p-4">
              <OrdersOverview />
            </div>
            <div className="bg-white shadow-lg row-span-8 rounded-lg p-4">
              <TopSellingProducts />
            </div>
          </div>
          

          <div className="col-span-4 grid grid-rows-20 gap-4 ">

            <div className="bg-white row-span-10 shadow-lg  rounded-lg p-4">
              <OrdersByTime />
            </div>
            <div className="bg-white shadow-lg row-span-10 rounded-lg p-4">
              <TopCategories />
            </div>
          </div>
          
        </div>
      </div>
    </div>
    )
    }

    export default Dashboard