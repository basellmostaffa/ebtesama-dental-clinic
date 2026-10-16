import { useState } from 'react'
import { Menu, X, Phone, Sparkles } from 'lucide-react'

const links = [['#services', 'خدماتنا'], ['#doctors', 'أطباؤنا'], ['#pricing', 'الباقات'], ['#faq', 'الأسئلة الشائعة'], ['#booking', 'احجز الآن']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="navbar"><div className="container nav-inner">
    <a className="brand" href="#top" aria-label="عيادة ابتسامة"><span className="brand-mark"><Sparkles size={18}/></span><span>ابتسامة <small>لطب الأسنان</small></span></a>
    <nav className={`nav-links ${open ? 'open' : ''}`}>{links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-phone" href="tel:+201012345678"><Phone size={16}/> <span className="ltr-number">010 1234 5678</span></a></nav>
    <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}>{open ? <X/> : <Menu/>}</button>
  </div></header>
}
