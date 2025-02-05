import React from 'react';
import { Rss,ListTodo,ScanHeart,NotebookText,Footprints,Lock } from 'lucide-react';


function ShowcaseSection () {

  const features = [
    {
      icon: <Rss />,
      title: "Blog",
      desc: "Stay updated with the latest news, tips, and insights through your personal blog section."
    },
  
    {
      icon: <ListTodo />,
      title: "TO-DO List",
      desc: "Organize your tasks efficiently and never miss a deadline with this interactive list."
    },
    {
      icon: <Lock />,
      title: "Journal ",
      desc: "Use a journal to untangle your thoughts, track your growth, and turn fleeting moments into lasting reflections."
    },

  ];  

  return (
      <section className="">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
              <div className="relative max-w-2xl mx-auto sm:text-center">
                  <div className="relative z-10">
                      <h3 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
                          Let’s help you organize your life
                      </h3>
                  </div>
                  <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
              </div>
              <div className="relative mt-12">
                  <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {
                          features.map((item, idx) => (
                              <li key={idx} className="bg-white space-y-3 p-4 border rounded-lg">
                                  <div className="text-indigo-600 pb-3">
                                      {item.icon}
                                  </div>
                                  <h4 className="text-lg text-gray-800 font-semibold">
                                      {item.title}
                                  </h4>
                                  <p>
                                      {item.desc}
                                  </p>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          </div>
      </section>
  )
}

export default ShowcaseSection
