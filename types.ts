import { Document } from "@contentful/rich-text-types";
export type BlogPost = {
  title: string;
  content: { json: Document };
  slug: string;
  tags: string[];
  featuredImage: {
    url: string;
    title: string;
  };
  subtitle: string;
  publishedDate: string;
};

export type Props = {
  params: {
    slug: string;
  };
};
