import Sidebar from '../components/sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
  <div className="">
      {/* <Topbar></Topbar> */}
      <div className='flex'>
        <Sidebar></Sidebar>
        <Component {...pageProps} />
      </div>
  </div>
</>
  )
}

export default MyApp
