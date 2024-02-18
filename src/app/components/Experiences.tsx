"use client";
import { gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { client } from "@/core/apollo-client";
import { calculateYearMonthDifference, formatDate } from "../../../utils/Date";
import { TExperience } from "@/core/to/experiences";

const ExperienceRow = ({
  companyName,
  jobTitle,
  location,
  startFrom,
  until,
  workMode,
}: TExperience) => {
  const startDateString = formatDate(startFrom);
  const endDateString = formatDate(until);
  const length = calculateYearMonthDifference(startFrom, until);
  return (
    <div className="grid lg:grid-cols-2 py-4 gap-x-4 sm:grid-cols-2 gap-y-4 ">
      <div className="text-slate-50 text-lg">
        <p>
          {companyName} {location != null ? `- ${location}` : ``} - {workMode}
        </p>
        <p className="pt-2 text-slate-300">{jobTitle}</p>
      </div>
      <p className="text-end text-slate-300">
        {startDateString} - {endDateString} {length ? `(${length})` : ""}
      </p>
    </div>
  );
};

export const Experiences = () => {
  const [experiencesCollection, setExperiencesCollection] = useState([]);
  function queryByLocales() {
    client
      .query({
        query: gql`
          query ExperiencesCollection($order: [ExperiencesOrder]) {
            experiencesCollection(order: $order) {
              items {
                companyName
                jobTitle
                location
                startFrom
                until
                workMode
              }
            }
          }
        `,
        variables: {
          order: "startFrom_DESC",
        },
      })
      .then((result: any) => {
        setExperiencesCollection(result.data.experiencesCollection.items);
      });
  }
  useEffect(() => {
    queryByLocales();
  }, []);

  return (
    <div
      className="items-center py-12 px-4 mx-auto max-w-5xl lg:py-16 lg:px-6"
      id="experiences"
    >
      <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-slate-50">
        EXPERIENCES
      </h2>
      {experiencesCollection.map((exp: TExperience) => {
        return (
          <ExperienceRow
            key={exp.companyName}
            companyName={exp.companyName}
            jobTitle={exp.jobTitle}
            location={exp.location}
            startFrom={exp.startFrom}
            until={exp.until}
            workMode={exp.workMode}
          />
        );
      })}
      <div className="mt-12">
        <a
          href="https://docs.google.com/document/d/1mrbvH6JZ2fI4iq3vg6lWYYCGBHGwdoGUIL8hIkezdV4/edit?usp=sharing"
          className="text-slate-50 text-xl underline decoration-pink-500 hover:bg-pink-500 hover:p-1 rounded-lg hover:duration-300"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
};
