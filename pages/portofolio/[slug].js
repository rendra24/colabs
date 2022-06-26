import { useRouter } from "next/router";
import Image from "../../components/Image";
import Head from "next/head";

export default function DynamicPage(postData) {

    const routes = useRouter();
    const {slug} = routes.query;
    return (
        <>
        <Head>
          <title>Portofolio pembuatan {postData.postData.title}</title>
          <meta name="description" content={`Jasa pembuatan webiste aplikasi ${postData.postData.title} menggunakan engine terbaru dengan harga paling murah dan berkualitas`} />
          <meta property="og:title" content={`Portofolio pembuatan ${postData.postData.title}`} />
          <meta property="og:description" content={`Jasa pembuatan webiste aplikasi ${postData.postData.title} menggunakan engine terbaru dengan harga paling murah dan berkualitas`} />
        </Head>
        <section id="hero" className="mt-20 py-5 bg-primary-600">
        <div className="container">
          <div className="flex flex-wrap">
              <div className="w-full self-center px-4">
                <p className="text-basic py-2 text-gray-200 md:text-md">Beranda / { postData.postData.title }</p>
                <h1 className="text-white text-1xl font-semibold leading-relaxed md:text-2xl md:leading-relaxed">{ postData.postData.title }</h1>
              </div>
          </div>
        </div>
        </section>

        <section className="pt-20 pb-36 bg-slate-100 dark:bg-primary-700">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-8/12 pr-3">
                        <Image 
                        alt={postData.postData.title} 
                        width="847" 
                        height="635" 
                        src={ postData.postData.thumbnail } 
                        className="w-full rounded-xl" />
                    </div>
                    <div className="w-full lg:w-4/12 pl-3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
                            <div className="py-8 px-6">
                                <h3 className="block mb-3 font-semibold text-xl hover:text-primary-200 truncate dark:text-white">{ postData.postData.title }</h3>
                                <div className="font-medium text-base text-gray-500 mb-3 dark:text-slate-300 min-h-[72px]" dangerouslySetInnerHTML={{ __html:postData.postData.description }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
  }
  


  export async function getStaticProps(context) {
    const blogSlug = context.params.slug;
    const postData = await getPostData(blogSlug);
    return {
      props: {
        postData: postData[0],
      },
    };
  }



  async function getAllPostIds() {
    const apiUrl = `${process.env.URL_API}page?page=portofolio`;
  
    const response = await fetch(apiUrl);

    const allPosts = await response.json();

    const allPostIds = allPosts.data.map((post) => {
      return { params: { slug: post.slug } };
    });
  
    return allPostIds;
  }
  

  export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

  async function getPostData(slug) {

    const apiURL = `${process.env.URL_API}page?page=portofolio&slug=${slug}`;
  
    const response = await fetch(apiURL);
  
    const postData = await response.json();

    return postData.data;
  }