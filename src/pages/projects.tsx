import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "AI GeoGuesser",
    description:
      "Given a dataset with hundreds of images, AI predicts location of building and outputs its accuracy.",
    url: "https://github.com/aschahal/LeNet-Neural-Architecture",
    image: require(`${assetsDir}/newgeoguesser.jpg`),
    role: "Python, PyTorch",
  },
  {
    title: "Teeko AI Game",
    description: "A fun, competitive game of Teeko between human and AI.",
    url: "https://github.com/aschahal/Taeko-AI",
    image: require(`${assetsDir}/teeko.png`),
    role: "Django, Python",
  },
  {
    title: "Reinforcement AI Learning",
    description:
      "An AI model that continues to learn new things using Q Learning Algorithm.",
    url: "https://github.com/aschahal/Reinforcement-Learning-AI",
    image: require(`${assetsDir}/learning.jpg`),
    role: "Python, PyTorch",
  },
  {
    title: "Monster Face Filter",
    description:
      "An immersive augmented reality experience, creating a dynamic monster face filter.",
    url: "https://github.com/aschahal/Demon-Face-Filter",
    image: require(`${assetsDir}/demonface.png`),
    role: "JavaScript, JSON, OpenGL, Lens Studio",
  },
  {
    title: "AI Data Loader",
    description: "Haveing given dataset analyzed by AI model.",
    url: "https://github.com/aschahal/PyTorch-Data-Loader",
    image: require(`${assetsDir}/loaddata.png`),
    role: "Python, PyTorch",
  },
];

const title = "Projects";
const description = "Featured projects I was/am involved in.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
