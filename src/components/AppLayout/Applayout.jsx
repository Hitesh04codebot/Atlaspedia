import { Outlet } from 'react-router-dom'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
function Applayout() {
  return (
    <>
        <Header/>
        <Outlet />
        {/* The Outlet component will render the child routes defined in the router */}
        <Footer/>
    </>
  )
}

export default Applayout