import { useEffect } from 'react'
import { AuthContextProvider } from '../components/authContext'
import Header from '../components/Header'
import { SearchContextProvider } from '../components/searchContext'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  useEffect(()=>{
     router.push('/newpages/Headlines')
  },[])
  return (
    <AuthContextProvider>
      <SearchContextProvider>
      <Header />
      <div className='sideandcomp'>
        <Sidebar />
        <Component {...pageProps} />
      </div>
      </SearchContextProvider>  
    </AuthContextProvider>
    
   )   
    
}

export default MyApp
