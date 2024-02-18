"use client"
import { IoIosArrowForward } from "react-icons/io";
import { client } from "../../../apollo-client";
import { useEffect, useState } from "react";
import { gql } from '@apollo/client';
const BlogSection =  () => {
    const [blogsCollection, setBlogsCollection] = useState([]);
  function queryByLocales() {
    client
      .query({
        query: gql`
        query BlogCollection {
            blogCollection {
              items {
                title
                tags
                subtitle
                slug
                publishedDate
              }
            }
          }
        `
      })
      .then((result: any) => {
        console.log(result.data.blogCollection.items);
        setBlogsCollection(result.data.blogCollection.items);
      });
      
    }
    useEffect(() => {
      queryByLocales();
    }, []);
  return (
    <div>
      {/* Blogs Section */}
      <div className="py-12">
        {/* Blog Itself */}
        {blogsCollection.map((blog: any) => {
          return (
            <div
              key={blog.slug}
              className=" space-y-4 select-none hover:bg-slate-300 hover:bg-opacity-10 py-4 px-2 rounded-2xl hover:duration-300"
            >
              <p className="text-lg font-bold text-slate-200">{blog.title}</p>
              <p className="text-slate-400 font-light"> 
              {new Date(blog?.publishedDate!).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
              
              </p>
              <p className="max-w-3xl text-lg font-light text-slate-300">
                {blog.subtitle}
              </p>
              <div className="pt-2">
                <a className="flex" href={`/blogs/${blog.slug}`}>
                  <IoIosArrowForward size={20} /> Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
