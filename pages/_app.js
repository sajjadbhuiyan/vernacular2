import Sidebar from '../components/sidebar'
import Topbar from '../components/topbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
  <div className="flex">
    <div className="flex">
      <Sidebar></Sidebar>
    </div>
    <div className='w-screen '>
      <Topbar></Topbar>
      <Component {...pageProps} />
    </div>
  </div>
</>
  )
}

export default MyApp
