export default function Footer(){
    return (
        <footer className="pt-24 pb-12 bg-slate-900">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">Colabs</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p>info@colabs.id</p>
              <p>Jl. Jenderal Basuki Rahmat No.7-9, Kauman,Kec. Klojen, Kota Malang</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="text-xl font-semibold text-white mb-5">Link Sitemap</h3>
              <ul className="text-slate-300">
                <li>
                  <a href="" className="inline-block text-base hover:text-primary-200 mb-3">Beranda</a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-primary-200 mb-3">Tentang Kami</a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-primary-200 mb-3">Layanan</a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-primary-200 mb-3">Portofolio</a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-primary-200 mb-3">Kontak Kami</a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="text-xl font-semibold text-white mb-5">Layanan Kami</h3>
              <ul className="text-slate-300">
                <li>
                  <a href="" className="inline-block text-base hover:text-primary-200 mb-3">Beranda</a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-primary-200 mb-3">Tentang Kami</a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-primary-200 mb-3">Layanan</a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-primary-200 mb-3">Portofolio</a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-primary-200 mb-3">Kontak Kami</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5">
                    <a href="facebook.com" target={'_blank'} className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-white text-white hover:bg-white hover:text-primary-500"><i className="ri-facebook-fill"></i></a>
                    <a href="facebook.com" target={'_blank'} className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-white text-white hover:bg-white hover:text-primary-500"><i className="ri-instagram-fill"></i></a>
                    <a href="facebook.com" target={'_blank'} className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-white text-white hover:bg-white hover:text-primary-500"><i className="ri-linkedin-fill"></i></a>
                    <a href="facebook.com" target={'_blank'} className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-white text-white hover:bg-white hover:text-primary-500"><i className="ri-youtube-fill"></i></a>
                    <a href="facebook.com" target={'_blank'} className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-white text-white hover:bg-white hover:text-primary-500"><i className="ri-whatsapp-fill"></i></a>
          </div>
          <p className="flex font-medium text-sm text-slate-500 items-center justify-center">© Copyright &nbsp;<span className="font-bold">COLABS</span>. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    )
}