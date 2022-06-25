import { Menu, Transition } from '@headlessui/react'

export default function Header(){

    function toggleDark(){
        const darkToggle = document.querySelector('#dark-toggle');
        const html  = document.querySelector('html');
    
        if(darkToggle.checked){
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }else{
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
    
      }

    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a><img src="/logo.png" alt="Kolaborasi Bersama Logo" className="w-16 h-auto" /></a>
            </div>
            <div className="flex items-center px-4">
            <Menu>
              <Menu.Button className="text-2xl lg:hidden dark:text-white"><i className="ri-menu-line"></i></Menu.Button>
              <Transition
          enter="transition ease-out duration-300"
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition ease-in duration-75'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
              <Menu.Items as="div" className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-primary-700 dark:bg-opacity-100 dark:shadow-slate-600`}>
                <Menu.Item as="div" className="px-1 py-1 ">
                <a href="#" className="font-base text-black py-2 mx-8 flex group-hover:text-primary-500 dark:text-white">Beranda</a>
                </Menu.Item>
                <Menu.Item as="div" className="px-1 py-1 ">
                <a href="#about" className="font-base text-black py-2 mx-8 flex group-hover:text-primary-500 dark:text-white">Tentang Kami</a>
                </Menu.Item>
                <Menu.Item as="div" className="px-1 py-1 ">
                <a href="#layanan" className="font-base text-black py-2 mx-8 flex group-hover:text-primary-500 dark:text-white">Layanan</a>
                </Menu.Item>
                <Menu.Item as="div" className="px-1 py-1 ">
                <a href="#portofolio" className="font-base text-black py-2 mx-8 flex group-hover:text-primary-500 dark:text-white">Portofolio</a>
                </Menu.Item>
                <Menu.Item as="div" className="px-1 py-1 ">
                <a href="#kontak" className="font-base text-black py-2 mx-8 flex group-hover:text-primary-500 dark:text-white">Kontak Kami</a>
                </Menu.Item>
                <Menu.Item as="div" className="mt-3 lg:mt-0 flex items-center pl-8">
                <div className="flex">
                        <span className="mr-2 text-sm text-slate-500">Light</span>
                        <input className="hidden" type="checkbox" id="dark-toggle" onClick={toggleDark} />
                        <label for="dark-toggle">
                          <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                            <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                          </div>
                        </label>
                        <span className="ml-2 text-sm text-slate-500">Dark</span>
                      </div>
                </Menu.Item>
              </Menu.Items>
              </Transition>
            </Menu>
                
                <nav id="nav-menu" className={`hidden absolute py-5 bg-white shadow-lg w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-primary-700 dark:bg-opacity-0 dark:shadow-slate-600`}>
                  <ul className="block lg:flex">
                    <li className="group">
                      <a href="#" className="link-nav">Beranda</a>
                    </li>
                    <li className="group">
                      <a href="#about" className="link-nav">Tentang Kami</a>
                    </li>
                    <li className="group">
                      <a href="#layanan" className="link-nav">Layanan</a>
                    </li>
                    <li className="group">
                      <a href="#portofolio" className="link-nav">Portofolio</a>
                    </li>
                    <li className="group">
                      <a href="#kontak" className="link-nav">Kontak Kami</a>
                    </li>
                    <li className="mt-3 lg:mt-0 flex items-center pl-8">
                      <div className="flex">
                        <span className="mr-2 text-sm text-slate-500">Light</span>
                        <input className="hidden" type="checkbox" id="dark-toggle" onClick={toggleDark} />
                        <label for="dark-toggle">
                          <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                            <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                          </div>
                        </label>
                        <span className="ml-2 text-sm text-slate-500">Dark</span>
                      </div>
                    </li>
                  </ul>
                </nav>
            </div>
          </div>
        </div>
      </header>
    )
}