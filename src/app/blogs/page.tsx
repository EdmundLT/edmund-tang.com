import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className="items-center py-12 px-4 mx-auto max-w-5xl lg:py-16 lg:px-6 text-slate-50">
      {/* Title and section */}
      <div className="py-6">
        <p className="text-3xl font-bold">TECH BLOGS</p>
        <p className="text-md font-light text-slate-400 mt-3">
          My Software Engineering Learning Journey
        </p>
      </div>

      {/* Blogs Section */}
      <div className="py-12">
        {/* Blog Itself */}

        <div className=" space-y-4 select-none hover:bg-slate-300 hover:bg-opacity-10 py-4 px-2 rounded-2xl hover:duration-300">
          <p className="text-lg font-bold text-slate-200">
            How Next.js replace React.js in my work?
          </p>
          <p className="text-slate-400 font-light"> December 10, 2023</p>
          <p className="max-w-3xl text-lg font-light text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec ornare felis. Praesent at leo dui. Suspendisse tincidunt
            fringilla ipsum vel suscipit. Praesent dictum nibh ex, eu tempus est
            ultrices et. Aenean pellentesque, purus in...
          </p>
          <div className="pt-2">
            <a className="flex" href={`/blogs/slug`}>
              <IoIosArrowForward size={20} /> Read More
            </a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
