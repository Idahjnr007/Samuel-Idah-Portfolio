import { useEffect, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import skillsData from './data/skills.json';

const navItems = [  
  { target: 'about', label: '📄 about.tsx', href: '#about' },
  { target: 'skills', label: '📁 skills.json', href: '#skills' },
  { target: 'projects', label: '📁 projects/', href: '#projects' },
  { target: 'experience', label: '>_ log.md', href: '#experience' },
  { target: 'contact', label: '✉ contact.ts', href: '#contact' },
];

function App() {
  const [activeTarget, setActiveTarget] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);
  const clickingRef = useRef(false);

  const handleTabClick = (e, id) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (!target) return;

    clickingRef.current = true;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setActiveTarget(id);
    setMobileOpen(false);

    setTimeout(() => {
      clickingRef.current = false;
    }, 700);
  };

  const toggleMobileMenu = () => setMobileOpen((open) => !open);

  useEffect(() => {
    // Log skills data on mount, mirroring the original fetch("skills.json") call
    console.log('Skills:', skillsData.skills);
  }, []);

  return (
    <>
      <Header
        navItems={navItems}
        activeTarget={activeTarget}
        onTabClick={handleTabClick}
        mobileOpen={mobileOpen}
        onToggleMobile={toggleMobileMenu}
      />

      <MobileMenu
        navItems={navItems}
        activeTarget={activeTarget}
        onTabClick={handleTabClick}
        isOpen={mobileOpen}
      />

      <About skills={skillsData.skills} />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
