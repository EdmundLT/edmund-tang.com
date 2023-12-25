import { gql } from "@apollo/client";
import { client } from "../../apollo-client";

export default async function sitemap() {
  const urls = [
    {
      url: "https://edmundlt.tech/blogs",
      priority: 1,
    },
  ];
let slug: any = [];
  await client
    .query({
      query: gql`
        query Query($limit: Int) {
          blogCollection(limit: $limit) {
            items {
              slug
            }
          }
        }
      `,
      variables: {
        limit: 100,
      },
    })
    .then((res) => {
        slug = res.data.blogCollection.items.map(({ slug }: { slug: string }) => {
        return {
          url: `https://edmundlt.tech/blogs/${slug}`,
          priority: 1,
        };
      });
      console.log(slug);
    });

  return [...urls, ...slug];
}
