import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Doctors from './components/Doctors'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

export default function App() { return <><Navbar/><main><Hero/><Services/><WhyUs/><Doctors/><Pricing/><Testimonials/><FAQ/><Booking/></main><Footer/><a className="whatsapp" href="https://wa.me/201012345678" target="_blank" rel="noreferrer" aria-label="تواصل معنا عبر واتساب"><MessageCircle size={25}/></a></> }
