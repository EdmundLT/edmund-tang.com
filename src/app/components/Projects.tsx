import React from "react";
type TProject = {
  title: string;
  description: string;
  url: string;
  tag: string[];
};

const ProjectRow = ({ project }: { project: TProject }) => {
  const { title, description, url, tag } = project;
  return (
    <div className="text-slate-50">
      <a href={url} className="text-lg underline decoration-pink-500">
        {title}
      </a>
      <p className="text-slate-300 mt-2 max-w-3xl">{description}</p>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {tag.map((item) => {
          return (
            <p
              key={item}
              className="border py-1 px-3 rounded border-pink-500 bg-transparent text-xs md:text-base lg:text-base"
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

const projectList: TProject[] = [
  {
    title: "PriceFresh",
    description: `Price compare platform that compare grocery price, and found the closet one near user location.`,
    url: "https://otto-notes.com/en",
    tag: [
      "React.js",
      "Google Map API",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },
  {
    title: "Otto Notes",
    description: `A personal blog with multi-languages SEO blog posts. Over 1,000 users
            traffic daily. Monitoring data in Google Analytic, create Ad revenue
            from Google Adsense.`,
    url: "https://otto-notes.com/en",
    tag: [
      "Next.js",
      "Google Analytic",
      "Tailwind CSS",
      "Contentful",
      "GraphQL",
      "SEO",
    ],
  },
  {
    title: "Code Racer (Community Project)",
    description: `Developed a multiplayer coding game where developers can compete against each other to solve programming challenges in real-time. Submitted several pull requests to improve UI and result page for guests and unauthenticated Users.`,
    url: "https://code-racer-eight.vercel.app/",
    tag: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma", "ShadCN/UI"],
  },
  {
    title: "Leung King Cleaning Company",
    description: `I built company website for client to introduce their services in 2020.`,
    url: "https://mld-indol.vercel.app/",
    tag: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Grayscale Your Image",
    description: `My first Webpack and Rust little project. User can upload PNG file and get a grayscale version of the picture.`,
    url: "https://grayscale-your-img.vercel.app/",
    tag: ["Javascript", "Rust", "Webpack"],
  },
  {
    title: "Clipz",
    description: `A web application for user to share gaming moment. My first Angular project!`,
    url: "https://clipz-blond.vercel.app/",
    tag: ["Angular", "Google Firebase", "Rx.js", "video.js"],
  },
  {
    title: "Fake Financial Data API",
    description: `Developed a full stack PERN web application, providing API endpoint for users to connect and get random stock data for application prototype and data analytic project.
    `,
    url: "https://github.com/EdmundLT/fake-financial-data-io",
    tag: [
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "AWS",
      "CI/CD",
      "Jest",
    ],
  },
];

const Projects = () => {
  return (
    <div
      className="gap-16 items-center py-32 px-4 mx-auto max-w-5xl lg:py-32 lg:px-6"
      id="projects"
    >
      <p className="mb-4 text-3xl tracking-tight font-extrabold text-slate-50">
        PROJECTS
      </p>
      {projectList.map((project) => {
        return (
          <div className="py-8" key={project.url}>
            <ProjectRow project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
