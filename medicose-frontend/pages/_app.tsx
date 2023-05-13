import { Route } from 'react-router-dom'
import '../styles/globals.css'
import '../styles/index.scss'
import type { AppProps } from 'next/app'
import DoctorHome from '../components/DoctorDashboard/DoctorHome'

export default function App({ Component, pageProps }: AppProps) {
  
  return <Component {...pageProps} />
}