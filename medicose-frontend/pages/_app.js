import Link from 'next/link'
import '../styles/globals.css'
import Navbar from './components/Navbar'
import RegisterAs from './components/RegisterAs'
import RegisterAsPatient from './components/RegisterAsPatient'
export default function App({Component,pageProps}){
 return(
  <>
  {/* <RegisterAs/> */}
  <Component {...pageProps}/>
  </>
 )

}
// import {BrowserRouter,Routes, Route} from 'react-router-dom'
// import RegisterAs from './components/RegisterAs'
// function App(){
//     return (
//         <>
//         <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<RegisterAs/>}/>
//         </Routes>
//         </BrowserRouter>
//         <Component {...pageProps}/>
//         </>
//     )
// }

// export default App;