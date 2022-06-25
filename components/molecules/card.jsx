export default function Card({type}) {
     let links,gambar;
    if(type === 'link') {
        links = <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                        
                </a>
    }else if(type === 'image'){
        gambar =  <a href="#">
        {/* <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt /> */}
      </a>
    }else if(type === 'image-link'){
        links = <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                        
                </a>
        gambar =  <a href="#">
        {/* <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt /> */}
      </a>
    }
    
    return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
{gambar}
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    {links}
  </div>
</div>
)
}