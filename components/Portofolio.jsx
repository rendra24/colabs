import { useEffect , useState } from "react"
import axios from 'axios'
import Image from "../components/Image.js"

export default function Portofolio() {

    const [porto, setPorto] = useState([])
 

    useEffect(() => {
      axios.get(`${process.env.URL_API}page?page=portofolio`)
      .then(res => {
        const porto = res.data;
        setPorto(porto.data);
      })
    }, []);
    const regex = /(<([^>]+)>)/ig;

    return(
        <section id="portofolio" className="pt-24 pb-16 bg-slate-100 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary-200 dark:text-white mb-2">Portofolio</h4>
              <h2 className="font-bold text-3xl text-primary-500 dark:text-white sm:text-4xl lg:text-5xl">Portofolio Kami</h2>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {
            porto.map(porto =>
            <div className="mb-12 p-4 md:w-1/3">
              <div className="rounded-md shadow-md overflow-hidden">
                <Image
                src={ porto.thumbnail }
                alt="I'm a lazy image"
                placeholder='blur'
                width="315"
                height="236"
                className="w-full h-full object-cover"
                blurDataURL
              />
              </div>
              <a href={ `portofolio/${porto.slug}` } className="block"><h3 className="text-xl font-semibold mt-5 mb-3 dark:text-white">{ porto.title }</h3></a>
              <p className="text-base font-medium text-gray-600 dark:text-slate-400">{ porto.description.replace(regex, '').substring(0, 100) }</p>
            </div>
            )
        }

          </div>
        </div>
      </section>
    )
}