"use client";
import { gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { client } from "@/core/apollo-client";
import { Separator } from "@/components/ui/separator";
import { TProject } from "@/core/to/project";

const ProjectRow = ({ project }: { project: TProject }) => {
  const { title, description, url, tag } = project;
  return (
    <>
      <div className="space-y-1 text-slate-50">
        <a href={url} className="text-lg font-medium leading-none">
          {title}
        </a>
        <p className="text-md text-slate-300">{description}</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-md text-slate-200">
        {tag.map((tag, idx) => {
          return (
            <>
              <div key={idx}>{tag}</div>
              <Separator orientation="vertical" />{" "}
            </>
          );
        })}
      </div>
    </>
  );
};

const Projects = () => {
  const [projectsCollection, setProjectsCollection] = useState<TProject[]>([]);
  function queryByLocales() {
    client
      .query({
        query: gql`
          query ProejctsCollection($order: [ProejctsOrder]) {
            proejctsCollection(order: $order) {
              items {
                title
                date
                description
                url
                tag
              }
            }
          }
        `,
        variables: {
          order: "date_DESC",
        },
      })
      .then((result: any) => {
        setProjectsCollection(result.data.proejctsCollection.items);
      });
  }
  useEffect(() => {
    queryByLocales();
  }, []);

  return (
    <div
      className="gap-16 items-center py-32 px-4 mx-auto max-w-5xl lg:py-32 lg:px-6"
      id="projects"
    >
      <p className="mb-4 text-3xl tracking-tight font-extrabold text-slate-50">
        PROJECTS
      </p>
      {projectsCollection.map((project) => {
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
