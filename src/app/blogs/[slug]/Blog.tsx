"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/core/apollo-client";
import { gql } from "@apollo/client";
import { BLOCKS, INLINES, MARKS} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BlogPost } from "../../../../types";
import { Metadata } from "next";
import {  } from '@contentful/rich-text-types';


const page = ({ params }: any) => {
  const [blog, setBlog] = useState<BlogPost>();
  const [assetMap, setAssetMap] = useState(new Map());
  async function getBlog() {
    params.slug = decodeURIComponent(params.slug);
    await client
      .query({
        query: gql`
          query ($preview: Boolean, $slug: String!, $limit: Int) {
            blogCollection(
              preview: $preview
              where: { slug: $slug }
              limit: $limit
            ) {
              items {
                title
                content {
                  json
                  links {
                    assets {
                      block {
                        title
                        url
                        sys {
                          id
                        }
                      }
                    }
                  }
                }
                slug
                tags
                featuredImage {
                  url
                  title
                }
                subtitle
                publishedDate
              }
            }
          }
        `,
        variables: {
          slug: params.slug,
          limit: 1,
        },
      })
      .then((res: any) => {
        for (const asset of res.data.blogCollection.items[0].content.links
          .assets.block) {
          assetMap.set(asset.sys.id, asset);
        }
        console.log(res.data.blogCollection.items[0]);
        setBlog(res.data.blogCollection.items[0]);
      });
  }
  useEffect(() => {
    getBlog();
  }, []);
  const Heading1 = ({ children }: any) => (
    <h1 className="py-1 text-3xl">{children}</h1>
  );
  const Heading2 = ({ children }: any) => (
    <h2 className="text-2xl">{children}</h2>
  );
  const Heading3 = ({ children }: any) => (
    <h3 className="py-1 text-xl font-medium">{children}</h3>
  );
  const Text = ({ children }: any) => <p className="text-lg">{children}</p>;
  const OrderedList = ({ children }: any) => (
    <ol className="list-disc pl-4">{children}</ol>
  );
  const ListItem = ({ children }: any) => <li className="py-1">{children}</li>;
  const Link = ({ children, href }: any) => (
    <a className="text-blue-700 underline hover:text-blue-950" href={href}>
      {children}
    </a>
  );

  const RichTextoptions = {

    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <Heading1>{children}</Heading1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <Heading2>{children}</Heading2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <Heading3>{children}</Heading3>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <ListItem>{children}</ListItem>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <Link href={node.data.uri}>{children}</Link>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        // find the asset in the assetMap by ID
        const assetId = node.data.target.sys.id;
        console.log(assetId);
        const asset = assetMap.get(assetId);

        // render the asset accordingly
        return <img src={asset.url} alt="My image alt text" />;
      },
      
    },

    renderText: (text: any) => text.replace("!", "?"),

  };
  
  return (
    <main>
      <article>
        <header className="mx-auto max-w-screen-md pt-10 text-center px-2 text-slate-50">
          <p>
            Published{" "}
            {new Date(blog?.publishedDate!).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
          <h1 className="mt-2 text-2xl font-bold  sm:text-3xl">
            {blog?.title}
          </h1>
          <p className="mt-6 text-lg">{blog?.subtitle}</p>
          <div
            className="mt-6 flex flex-wrap justify-center gap-2"
            aria-label="Tags"
          >
            {blog?.tags.map((tag) => {
              return (
                <button
                  key={tag}
                  className="rounded-lg  px-2 py-1 font-medium "
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <img
            className="mt-5 w-full object-contain sm:h-[34rem]"
            src={blog?.featuredImage.url}
            alt={blog?.featuredImage.title}
          />
        </header>

        {blog ? (
          <div className="mx-auto mt-5 max-w-screen-md space-y-12 px-4 py-5 text-lg text-slate-50 ">
            {documentToReactComponents(blog.content.json, RichTextoptions)}
          </div>
        ) : (
          <div></div>
        )}
      </article>
    </main>
  );
};

export default page;
