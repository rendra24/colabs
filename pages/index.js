import { useEffect, useState } from 'react'
import Image from "components/Image"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Blog from 'components/Blog'
import Portofolio from 'components/Portofolio'
import axios from 'axios'
import Button from 'components/atoms/Button'

export default function Home() {  

  const validate = Yup.object({
    nama: Yup.string().max(15, 'Nama terlalu panjang!').required('Nama wajib diisi!'),
    email: Yup.string().email('Email is invalid').required('Email wajib diisi!'),
    subject: Yup.string().max(15, 'Subject terlalu panjang!').required('Subject wajib diisi!'),
    message: Yup.string().max(50, 'Message terlalu panjang!').required('Message wajib diisi!'),
  })

  const formik = useFormik({
    initialValues: { nama: '', email: '', subject: '', message: '' },
    validationSchema: validate,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      addPosts(values);
    },
  });

  const addPosts = (data) => {
      axios
       .post(`${process.env.URL_API}kontak`, data)
       .then((response) => {
          // setPosts([response.data, ...posts]);
          console.log(response);
       })
       .catch(function (error) {
        console.log(error);
      });
 };

  const handleScroll = () => { 
    const header = document.querySelector('header');
    const btntop = document.querySelector('#btntop');
    const fixnav = header.offsetTop;

    if(window.pageYOffset > fixnav){
      header.className = "narbar-fixed";
      btntop.className = "flex fixed items-center justify-center z-[9999] bottom-4 right-4 h-14 w-14 rounded-full bg-primary-500 text-white text-2xl hover:animate-pulse";
    }else{
      header.className = "bg-transparent absolute top-0 left-0 w-full flex items-center z-10";
      btntop.className = "hidden";
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);

  });


  

  return (
    <>
      {/* End Navbar */}

      {/* Hero */}
      <section id="hero" className="pt-36 dark:bg-primary-700">
      <div className="container">
        <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2 lg:px-20">
              <h1 className="text-primary-500 dark:text-white text-2xl font-medium leading-relaxed md:text-4xl md:leading-relaxed">Buat produk <span className="bg-primary-500 dark:bg-white dark:text-primary-500 text-white px-5 rounded">Hebat</span> & <br/> <span className="bg-primary-500 text-white dark:bg-white dark:text-primary-500 px-5 rounded">Berkolaborasi</span> hanya di <br/> <span className="text-black dark:text-white text-4xl font-bold md:text-5xl">COLABS.id</span></h1>
              <p className="text-basic py-3 text-gray-600 md:text-lg">Kami akan membantu menyelesaikan masalah <br/> pengembangan produk digital Anda.</p>

              <Button className="btn-primary" href="/about" type="link">
              Mari Berkenalan 
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Button>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10">
              <Image width="500" height="500" alt="banner-colabs" src="/market-lauch.gif" />
              </div>
            </div>
        </div>
      </div>

      </section>
      {/* End Hero */}


      {/* About */}
      <section id="about" className="pt-36 pb-32 dark:bg-primary-700">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 mb-10 lg:w-1/2 bg-secondary-default py-10 rounded lg:mt-12 dark:bg-slate-800">
                <p className="text-primary-400 font-medium mb-2 lg:text-xl dark:text-white">SIAPAKAH KITA ?</p>
                <h4 className="font-semibold text-primary-500 text-xl mb-2 lg:text-2xl dark:text-white">Halo perkenalkan kami !</h4>
                <p className="text-base lg:text-lg dark:text-white"><span className="text-primary-200 dark:text-white font-semibold">COLABS</span> memiliki tim berbakat dan kreatif yang menyediakan berbagai layanan handal untuk menyelesaikan masalah pengembangan produk digital Anda.</p>

                <div className="flex items-center mt-3 mb-3">
                    <a href="facebook.com" target={'_blank'} className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-primary-400 text-blue-500 hover:bg-primary-500 hover:text-white"><i className="ri-facebook-fill"></i></a>
                    <a href="facebook.com" target={'_blank'} className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-primary-400 text-blue-500 hover:bg-primary-500 hover:text-white"><i className="ri-instagram-fill"></i></a>
                    <a href="facebook.com" target={'_blank'} className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-primary-400 text-blue-500 hover:bg-primary-500 hover:text-white"><i className="ri-linkedin-fill"></i></a>
                    <a href="facebook.com" target={'_blank'} className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-primary-400 text-blue-500 hover:bg-primary-500 hover:text-white"><i className="ri-youtube-fill"></i></a>
                    <a href="facebook.com" target={'_blank'} className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-primary-400 text-blue-500 hover:bg-primary-500 hover:text-white"><i className="ri-whatsapp-fill"></i></a>
                </div>

                <a href="" className="btn-primary">Hubungi Kami Sekarang</a>
            </div>
            <div className="w-full lg:w-1/2">
            
            <Image
                src="/about.jpeg"
                alt="I'm a lazy image"
                placeholder='blur'
                width="648"
                height="486"
                className="rounded w-full lg:w-auto lg:h-auto"
                blurDataURL
              />
             
            </div>
          </div>
        </div>
      </section>
      {/* End About */}

      {/* portofolio */}
      <Portofolio />
      {/* End portofolio */}

      {/* Client */}
      <section id="client" className="pt-24 pb-32 bg-slate-700">
        <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-10">
            <h4 className="font-medium text-lg text-white mb-2">Client</h4>
            <h2 className="font-bold text-3xl text-white sm:text-4xl lg:text-5xl">Pernah Berkolaborasi Dengan</h2>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap justify-center items-center">
            <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-40 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
              <Image width="120" height="80" alt="google" src="/client/google.svg" />
            </a>
            <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-40 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
            <Image width="120" height="36" alt="tokopedia" src="/client/tokopedia.png" />
            </a>
            <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-40 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
            <Image width="120" height="40" alt="gojek" src="/client/gojek.png" />
            </a>
            <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-40 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
            <Image width="120" height="80" alt="google" src="/client/google.svg" />
            </a>
          </div>
        </div>
        </div>
    </section>
      {/* End client */}

      {/* Blog */}
      <Blog />
      {/* End blog */}

      {/* Kontak */}
      <section id="kontak" className="pt-24 pb-32 dark:bg-slate-800">
          <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center lg:w-1/2 lg:mt-12">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 xl:w-1/2 lg:pr-5">
                <div className="w-full self-center text-center px-4 bg-secondary-default dark:bg-slate-500 rounded py-10 mb-5 lg:min-h-[286px]">
                  <i className="ri-map-pin-fill text-5xl text-primary-500 dark:text-white"></i>
                  <h4 className="text-xl text-primary-500 font-semibold mb-3 dark:text-white">Alamat</h4>
                  <p className="text-lg dark:text-slate-200">Telkom Kayutangan, Jl. Jenderal Basuki Rahmat No.7-9, Kauman,Kec. Klojen, Kota Malang</p>
                </div>
                <div className="w-full self-center text-center px-4 bg-secondary-default dark:bg-slate-500 rounded py-10 mb-5 lg:min-h-[286px]">
                  <i className="ri-mail-fill text-5xl text-primary-500 dark:text-white"></i>
                  <h4 className="text-xl text-primary-500 font-semibold mb-3 dark:text-white">Email</h4>
                  <p className="text-lg dark:text-slate-200">cs@colabs.id <br/> info@colabs.id</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-1/2">
                <div className="w-full self-center text-center px-4 bg-secondary-default dark:bg-slate-500 rounded py-10 mb-5 lg:min-h-[286px]">
                  <i className="ri-whatsapp-fill text-5xl text-primary-500 dark:text-white"></i>
                  <h4 className="text-xl text-primary-500 font-semibold mb-3 dark:text-white">Telphone/Whatsapp</h4>
                  <p className="text-lg dark:text-slate-200">(+62) 812-3391-6977</p>
                </div>
              <div className="w-full self-center text-center px-4 bg-secondary-default dark:bg-slate-500 rounded py-10 mb-5 lg:min-h-[286px]">
                <i className="ri-time-fill text-5xl text-primary-500 dark:text-white"></i>
                <h4 className="text-xl text-primary-500 font-semibold mb-3 dark:text-white">Jam Kerja</h4>
                <p className="text-lg dark:text-slate-200">Senin - Jumat <br/> 9:00 - 17:00</p>
              </div>
              </div>
            </div>

            </div>
            <div className="w-full lg:w-1/2">
            <div className="w-full px-4">
              <div className="mx-auto text-center mb-10">
              <h4 className="font-semibold text-lg text-primary-200 mb-2 dark:text-white">Kontak</h4>
                <h2 className="font-bold text-3xl text-primary-500 sm:text-4xl lg:text-5xl dark:text-white">Hubungi Kami</h2>
              </div>
            </div>
            
            
            <form onSubmit={formik.handleSubmit}>
            <div className="w-full px-4 py-4">
              <label className="text-base font-bold text-primary-200 dark:text-white">Nama</label>
              <input type="text" name="nama" className="form-input w-full focus:outline-none border-none bg-slate-200 rounded" onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nama} />
              
              {formik.touched.nama && formik.errors.nama ? (
                  <div>{formik.errors.nama}</div>
              ) : null}

            </div>
            <div className="w-full px-4 py-4">
              <label className="text-base font-bold text-primary-200 dark:text-white">Email</label>
              <input type="email" name="email" className="form-input w-full focus:outline-none border-none bg-slate-200 rounded" onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email} />
              {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="w-full px-4 py-4">
              <label className="text-base font-bold text-primary-200 dark:text-white">Subject</label>
              <input type="text" name="subject" className="form-input w-full focus:outline-none border-none bg-slate-200 rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject} />
              {formik.touched.subject && formik.errors.subject ? (
                  <div>{formik.errors.subject}</div>
              ) : null}
            </div>

            <div className="w-full px-4 py-4">
              <label className="text-base font-bold text-primary-200 dark:text-white">Pesan</label>
              <textarea name="message" className="form-textarea w-full bg-slate-200  focus:outline-none border-none  rounded" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}>{formik.values.message}</textarea>
              {formik.touched.message && formik.errors.message ? (
                  <div>{formik.errors.message}</div>
              ) : null}
            </div>

            <div className="w-full px-4">
              <button type="submit" className="w-full bg-primary-500 text-center text-white rounded-lg text-sm px-10 py-3 my-3 font-semibold">Submit</button>
            </div>

            </form>

            </div>
          </div>
          </div>
      </section>
      {/* End kontak */}


      {/* BacktoTop */}
      <a href="#hero" id="btntop" className="hidden">
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  )
}
