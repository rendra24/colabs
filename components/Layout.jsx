import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'

export default function Layout({children}) {
    
      useEffect(() => {
        const darkToggle = document.querySelector('#dark-toggle');
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
          darkToggle.checked = true;
        } else {
          document.documentElement.classList.remove('dark')
          darkToggle.checked = false;
        }
      }); 

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
}