import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 fs-xxl fw-500 ls-2">Projects</h1>
      <div className="sy-6">
        {projects.map((project, index) => (
          <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className="d-b h:o-80 transition-opacity duration-200">
            <div className="d-f fd-c">
              <div className="w-full d-f jc-sb ai-b">
                <span className="fw-600 ls-2">{project.title}</span>
                <span className="fs-xl">{project.year}</span>
              </div>
              <p className="pt-3">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
