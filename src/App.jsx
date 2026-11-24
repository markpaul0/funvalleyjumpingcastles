import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Menu, X } from 'lucide-react'
import { site } from './site.js'

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) { nodes.forEach(el => el.classList.add('is-visible')); return }
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: .1 })
    nodes.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => { const close = e => { if (e.key === 'Escape') setOpen(false) }; window.addEventListener('keydown',close); return () => window.removeEventListener('keydown',close) }, [])
  return <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation"><a className="wordmark" href="#top" onClick={() => setOpen(false)}><span className="brand-symbol">✳</span>{site.name}<span className="brand-dot">.</span></a><div className={'nav-links '+(open?'open':'')} id="mobile-navigation">{site.navigation.map(item=><a key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}</a>)}<a className="mobile-contact" href="#contact" onClick={()=>setOpen(false)}>Get in touch <ArrowUpRight size={16}/></a></div><a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">{open?<X/>:<Menu/>}</button></nav></header>
}

function MainSite(){
 useReveal()
 return <div id="top" className="site-shell"><Navbar/><main>
  <section className="hero container" aria-labelledby="hero-title"><div className="hero-content"><div className="eyebrow"><span className="eyebrow-line"/>{site.eyebrow}</div><h1 id="hero-title">{site.headline}</h1><p className="hero-sub">{site.description}</p><div className="hero-actions"><a className="btn btn-dark" href="#contact">{site.primaryCta}<ArrowUpRight size={19}/></a><a className="text-link" href="#approach">{site.secondaryCta}<ArrowRight size={17}/></a></div><div className="hero-index"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={18}/></div></div><div className="hero-art" aria-label="Abstract sculptural illustration" role="img"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-object"><div className="art-inset"/></div><div className="art-chip"><span className="chip-star">✳</span><span>THINK BIGGER<br/>MOVE FORWARD</span></div><div className="art-caption">FORM / FUNCTION <span>001</span></div></div></section>
  <section className="statement" id="approach"><div className="container statement-grid"><div className="section-kicker" data-reveal>01 / THE APPROACH</div><div><h2 data-reveal>Good design isn't decoration.<br/><em>It's direction.</em></h2><p data-reveal>We're interested in what happens when ambition meets intention. Thoughtful decisions, clear communication, and work that feels unmistakably yours.</p></div></div></section>
  <section className="services container" id="services"><div className="services-heading" data-reveal><span className="section-kicker">02 / WHAT WE BELIEVE</span><h2>Built around<br/><em>what matters.</em></h2></div><div className="service-list">{site.services.map(service=><article className="service-row" key={service.number} data-reveal><span className="service-num">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight className="service-arrow" size={26}/></article>)}</div></section>
  <section className="contact-section" id="contact"><div className="container contact-content" data-reveal><div className="section-kicker">03 / LET'S BEGIN</div><h2>Something good<br/><em>starts here.</em></h2><p>Have a project in mind? We'd love to hear about it.</p><a href={'mailto:'+site.email+'?subject='+encodeURIComponent('Website enquiry')} className="btn btn-light">{site.email}<ArrowUpRight size={20}/></a><span className="contact-note">EMAIL CTA — REPLACE BEFORE LAUNCH</span></div></section>
 </main><footer className="footer"><div className="container footer-inner"><span className="wordmark footer-brand"><span className="brand-symbol">✳</span>{site.name}<span className="brand-dot">.</span></span><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer></div>
}

function DevicePreview(){
 const [device,setDevice] = useState('desktop')
 const [showInfo,setShowInfo] = useState(true)
 const sizes={desktop:{width:1440,height:900},tablet:{width:820,height:1180},mobile:{width:390,height:844}}
 const d=sizes[device]
 return <div className="device-page"><div className="device-toolbar"><div className="device-title"><span className="device-mark">✳</span><strong>Device preview</strong><span className="device-only">INTERNAL ONLY</span></div><div className="device-controls" aria-label="Preview device">{Object.keys(sizes).map(name=><button key={name} className={device===name?'active':''} onClick={()=>setDevice(name)} aria-pressed={device===name}>{name[0].toUpperCase()+name.slice(1)}</button>)}</div><div className="device-actions"><span>{d.width} × {d.height}</span><button onClick={()=>setShowInfo(!showInfo)} title="Toggle preview guidance">ⓘ</button><a href="/" target="_blank" rel="noreferrer">Open site ↗</a></div></div>{showInfo&&<p className="device-hint">Preview at a fixed viewport width. For final testing, also use a real phone and browser developer tools.</p>}<div className="device-stage"><div className={'device-frame '+device} style={{width:d.width,height:d.height}}><iframe title={device+' site preview'} src="/?preview=1" loading="eager"/></div></div></div>
}

export default function App(){return window.location.pathname.replace(/\/$/,'')==='/device'?<DevicePreview/>:<MainSite/>}
