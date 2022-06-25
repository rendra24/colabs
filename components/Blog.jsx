import { useEffect , useState } from "react"
import axios from 'axios'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
 

  useEffect(() => {
    axios.get(`${process.env.URL_API}blog`)
    .then(res => {
      const blogs = res.data;
      setBlogs(blogs.data);
    })
  }, []);
  const regex = /(<([^>]+)>)/ig;
    return (
        <section id="blog" className="pt-24 pb-32 bg-slate-100 dark:bg-primary-700">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary-200 mb-2 dark:text-white">Blog</h4>
              <h2 className="font-bold text-3xl text-primary-500 sm:text-4xl lg:text-5xl dark:text-white">Artikel Terkini</h2>
            </div>
          </div>

          <div className="flex flex-wrap">
          {
          blogs.map(blogs =>

            <div key={blogs.id} className="w-full px-4 lg:w-1/3 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
                <img src={ blogs.thumbnail } className="w-full min-h-[265px]" />
                <div className="py-8 px-6">
                  <a href={ `blog/${blogs.slug}` } className="block mb-3 font-semibold text-xl hover:text-primary-200 truncate dark:text-white"><h3>{ blogs.title }</h3></a>
                  <p className="font-medium text-base text-gray-500 mb-3 dark:text-slate-300 min-h-[72px]">{ blogs.description.replace(regex, '').substring(0, 100) }</p>
                  <a href="" className="block font-medium text-sm text-primary-300 hover:text-primary-500">Lihat Selengkapnya</a>
                </div>
              </div>
            </div>

            )
        }

          </div>
        </div>
      </section>
    )
}