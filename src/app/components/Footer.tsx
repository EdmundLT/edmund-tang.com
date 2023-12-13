import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" bg-transparent text-center text-white my-6">
      <div className=" bg-transparent p-4 text-center text-slate-50">
        © 2023 Copyright Edmund Tang
      </div>
      <div className="flex justify-center gap-x-4">
        <a href="https://instagram.com/edmundlt">
          <FaInstagram size={30} />
        </a>
        <a href="https://github.com/EdmundLT">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/longtang21/">
          <FaLinkedinIn size={30} />
        </a>
      </div>
    </footer>
  );
}
