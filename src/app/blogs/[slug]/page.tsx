import React from "react";
import Blog from "./Blog";
import { Props } from "../../../../types";

const BlogPage = ({ params }: Props) => {
  
  return (
    <section>
      <Blog params={params} />
    </section>
  );
};

export default BlogPage;
