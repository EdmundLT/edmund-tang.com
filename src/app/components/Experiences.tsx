import React from "react";

type TExperience = {
  company: string;
  title: string;
  time: string;
};
const ExperienceRow = ({ company, title, time }: TExperience) => {
  return (
    <div className="grid lg:grid-cols-2 py-4 gap-x-4 sm:grid-cols-2 gap-y-4 ">
      <div className="text-slate-50 text-lg">
        <p>{company}</p>
        <p className="pt-2 text-slate-300">{title}</p>
      </div>
      <p className="text-end text-slate-300">{time}</p>
    </div>
  );
};

const experiences: TExperience[] = [
  {
    company: "Royal Bank of Canada - Ontario, Canada",
    title: "Technical Support Analyst",
    time: "July 2022 - Present",
  },
  {
    company: "Freelancer",
    title: "Web Developer",
    time: "Sep 2020 - Present",
  },
  {
    company: "ITTO Digital - Hong Kong",
    title: "Web Developer",
    time: "May 2020 - May 2022",
  },
  {
    company: "Lap Kai Eng. Co Ltd - Hong Kong",
    title: "Site Assistant",
    time: "March 2019 - March 2020",
  },
];

export const Experiences = () => {
  return (
    <div className="items-center py-12 px-4 mx-auto max-w-5xl lg:py-16 lg:px-6">
      <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-slate-50">
        EXPERIENCES
      </h2>
      {experiences.map((exp: TExperience) => {
        return (
          <ExperienceRow
            key={exp.company}
            company={exp.company}
            time={exp.time}
            title={exp.title}
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
