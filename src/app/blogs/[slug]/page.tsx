import React from "react";
import { getSingleBlogPostBySlug } from "../../../../lib/notion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

const CodeBlock = ({ language, codestring }: any) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
      {codestring}
    </SyntaxHighlighter>
  );
};

const page = async ({ params }: any) => {
  const slug = params.slug;
  const post = await getSingleBlogPostBySlug(slug);

  return (
    <section className="mx-auto max-w-3xl">
      <div className="lg:px-0 py-12">
        <h2 className="text-4xl font-semibold text-slate-50 leading-tight">
          {post.metadata.title}
        </h2>
        <span className="py-2 inline-flex items-center justify-center mb-2">
          {post.metadata.date}
        </span>
      </div>
      {/* <p style={{ color: "gray" }}>{post.metadata.tags.join(", ")}</p> */}

      <ReactMarkdown
        className="prose lg:prose-xl"
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <CodeBlock
                codestring={String(children).replace(/\n$/, "")}
                language={match[1]}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {post.markdown}
      </ReactMarkdown>
    </section>
  );
};

export default page;
