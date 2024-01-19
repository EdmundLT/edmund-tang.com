import React from "react";
import Blog from "./Blog";
import { Props } from "../../../../types";
import { Metadata } from "next";
import { client } from "../../../../apollo-client";
import { gql } from "@apollo/client";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  params.slug = decodeURIComponent(params.slug);
  const blogMetadata = await client
    .query({
      query: gql`
        query ($where: BlogFilter) {
          blogCollection(where: $where) {
            items {
              title
              subtitle
            }
          }
        }
      `,
      variables: {
        where: {
          slug: params.slug,
        },
      },
    })
    .then((res) => res.data.blogCollection.items[0]);

  return {
    title: blogMetadata.title,
    description: blogMetadata.subtitle,
  };
}

const BlogPage = ({ params }: Props) => {
  return (
    <section>
      <Blog params={params} />
    </section>
  );
};

export default BlogPage;
