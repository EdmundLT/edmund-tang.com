import React from "react";
export const Skills = () => {
  return (
    <div className="items-center py-32 px-4 mx-auto max-w-5xl lg:py-32 lg:px-6" id="skills">
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-slate-50">
          Why Choose Me?
        </h2>
        <p className="mb-4 text-xl">
          I stay on the cutting edge of web development technologies to ensure
          that the solutions I provide are not only functional but also
          future-proof.
        </p>
        <p className="mb-4 text-xl">
          I believe in the power of details. From pixel-perfect design to clean,
          efficient code, I strive for excellence in every aspect of my work.
        </p>
        <p className="mb-4 text-xl">
          Effective communication is key to a successful project. I work closely
          with clients, ensuring that their vision is translated into a digital
          reality that aligns with their goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 py-8 gap-x-4 sm:grid-cols-2 gap-y-4">
        <div>
          <p className="text-slate-50">LANGUAGES</p>
          <p className="mt-2 text-slate-300">Javascript (ES6)</p>
          <p className="mt-2 text-slate-300">TypeScript</p>
          <p className="mt-2 text-slate-300">Python</p>
          <p className="mt-2 text-slate-300">HTML5 / CSS</p>
          <p className="mt-2 text-slate-300">C#</p>
          <p className="mt-2 text-slate-300">Java</p>
        </div>
        <div>
          <p className="text-slate-50">FRAMEWORKS</p>
          <p className="mt-2 text-slate-300">React.js</p>
          <p className="mt-2 text-slate-300">Next.js</p>
          <p className="mt-2 text-slate-300">Tailwind CSS</p>
          <p className="mt-2 text-slate-300">BootStrap 5</p>
          <p className="mt-2 text-slate-300">Angular</p>
          <p className="mt-2 text-slate-300">.NET</p>
        </div>
        <div>
          <p className="text-slate-50">WEBSITE BUILDING TOOLS</p>
          <p className="mt-2 text-slate-300">Wordpress</p>
          <p className="mt-2 text-slate-300">Webflow</p>
          <p className="mt-2 text-slate-300">SquareSpace</p>
          <p className="mt-2 text-slate-300">Shopify</p>
          <p className="mt-2 text-slate-300">Wix</p>
        </div>
        <div>
          <p className="text-slate-50">DESIGN</p>
          <p className="mt-2 text-slate-300">Adobe Photoshop</p>
          <p className="mt-2 text-slate-300">Figma</p>
          <p className="mt-2 text-slate-300">Canva</p>
        </div>
      </div>
    </div>
  );
};
