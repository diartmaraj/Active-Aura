    import React,{useEffect} from 'react'

    import KeyMetrics from './sections/KeyMetrics'
    import OrdersByTime from './sections/OrdersByTime'
    import OrdersOverview from './sections/OrdersOverview'
    import TopCategories from './sections/TopCategories'
    import TopSellingProducts from './sections/TopSellingProducts'
    import { useSelector } from 'react-redux'
    import { fetchProducts, resetState } from '../../../store/features/products/productsSlice';
    import { useDispatch } from 'react-redux'

    const Dashboard = () => {

      const productStatus = useSelector((state) => state.products.status);
      const products = useSelector((state) => state.products.items);
      const dispatch = useDispatch();

      useEffect(() => {
        if (productStatus === 'idle') {
          dispatch(fetchProducts()).catch(error => console.error('Error fetching products:', error));
        }
      }, [dispatch, productStatus]);
    
    return (
   
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 p-4">
          <div className="col-span-12 lg:col-span-8 grid gap-4">
            <div className="">
              <KeyMetrics />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <OrdersOverview />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 h-64 lg:h-auto overflow-hidden">
              <TopSellingProducts products={products}/>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 grid gap-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <OrdersByTime />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <TopCategories />
            </div>
          </div>
        </div>
    )
    }

    export default Dashboard