import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "CurrencyGussr",
    description:
      "This program is a web-based application titled CurrencyGuessr, developed using the Django framework, a high-level Python web framework that encourages rapid development and clean, pragmatic design. The application is designed as a game where players guess currency conversion rates, specifically focusing on the conversion rate from USD to TRY (Turkish Lira). The game aims to draw attention to the challenges of predicting currency rates in the context of Turkey's economy, which has been experiencing significant inflation and currency devaluation.",
    url: "https://3mirhan.pythonanywhere.com/",
    image: require(`${assetsDir}/better_money.avif`),
    role: "Django, Python, JavaScript, HTML, CSS",
  },

  {
    title: "SugaryScoops App",
    description:
      "This Swift code is part of an iOS application built using SwiftUI, designed to display a list of desserts fetched from a remote API and provide detailed information for each dessert. The code is structured around the Model-View-ViewModel (MVVM) architectural pattern, which helps in organizing the codebase for better maintainability and scalability.",
    url: "https://github.com/aschahal/Desserts-App",
    image: require(`${assetsDir}/desserts.avif`),
    role: "SwiftUI, Xcode, SwiftLint",
  },

  {
    title: "Teeko AI",
    description:
      "Based on original boardgame. The game Teeko was first released in 1945. Teeko is played on a 4x4 grid. The name was changed to Teeko (and the board grid changed to 5x5) for the 1952 release by John Scarne Games.Each player has four pieces. Players start by alternately placing pieces on a 5x5 grid, then alternate moves (moving one piece each turn to an adjacent point on the grid). Objective is to get four pieces in a row, or to form a square with your four pieces.",
    url: "https://github.com/aschahal/Taeko-AI",
    image: require(`${assetsDir}/teeko-standard.webp`),
    role: "Django, Python, PyTorch",
  },

  {
    title: "AI GeoGuesser",
    description:
      "This Python code demonstrates a deep learning training pipeline using PyTorch, one of the most popular libraries for deep learning. The code includes the definition of a neural network model, a function to count the model's trainable parameters, and functions to train and test the model. The neural network implemented here is a variation of LeNet, a seminal convolutional neural network (CNN) architecture, adjusted for a dataset with images of size 32x32 pixels and a configurable number of output classes.",
    url: "https://github.com/aschahal/LeNet-Neural-Architecture",
    image: require(`${assetsDir}/geoguessr.jpg`),
    role: "Python, PyTorch",
  },

  {
    title: "Reinforcement AI Learning",
    description:
      "This Python code implements a Q-learning algorithm for reinforcement learning, applied to the FrozenLake-v1 environment from OpenAI Gym. Q-learning is a value-based off-policy reinforcement learning algorithm that learns the quality (Q) of actions, indicating how good it is to perform a given action in a given state.",
    url: "https://github.com/aschahal/Reinforcement-Learning-AI",
    image: require(`${assetsDir}/reinforcement_ai.avif`),
    role: "Python, PyTorch",
  },
  {
    title: "Monster Face Filter",
    description:
      "This JavaScript code is designed for use in a 3D or augmented reality (AR) content creation platform, like Snapchat's Lens Studio or Facebook's Spark AR Studio, where it manipulates various visual effects on a face mesh in response to mouth movements detected in real-time.",
    url: "https://github.com/aschahal/Demon-Face-Filter",
    image: require(`${assetsDir}/demonface.png`),
    role: "JavaScript, JSON, OpenGL, Lens Studio",
  },
  {
    title: "AI Data Loader",
    description:
      "This Python code is a comprehensive example of building, training, and evaluating a neural network model with PyTorch for the FashionMNIST dataset, which is a dataset of Zalando's article images, consisting of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classes.",
    url: "https://github.com/aschahal/PyTorch-Data-Loader",
    image: require(`${assetsDir}/ai_data.jpg`),
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
