import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";

import BuildingGQLAPIForK8sResDescription from "./assets/talks/_building-gql-api-for-k8s-res.md";
import DevTeamCollaborationGitBestPracticesDescription from "./assets/talks/_dev-team-collaboration-git-best-practices.md";
import GraphQLInGoDescription from "./assets/talks/_graphql-in-go.md";
import UnityEngineDeveloper from "./assets/talks/unity_engine_dev.md";
import UxDesign from "./assets/talks/uxdesign.md";
import Front from "./assets/talks/front.md";
import IT from "./assets/talks/IT.md";

const talks: TalkMetadata[] = [
  {
    title: "IT Technical Support Analyst I",
    description: <IT />,
    events: [
      {
        name: "Promega Corporation",
        location: "On-site",
        date: new Date(2025, 0, 10),
      },
    ],
  },
  {
    title: "Front-End Software Developer",
    description: <Front />,
    events: [
      {
        name: "The Net VR",
        location: "Remote",
        date: new Date(2025, 0, 1),
      },
    ],
  },
  {
    title: "User Expereience Designer Intern",
    description: <UxDesign />,
    events: [
      {
        name: "The Net VR",
        location: "Remote",
        date: new Date(2024, 9, 10),
      },
    ],
  },
  {
    title: "Unity Engine Developer",
    description: <UnityEngineDeveloper />,
    events: [
      {
        name: "[P1] Games",
        location: "Remote",
        date: new Date(2024, 7, 8),
      },
    ],
    slidesURL: "https://tomboi23.itch.io/rockin-progress",
  },
  {
    title: "Contract Software Developer",
    description: <BuildingGQLAPIForK8sResDescription />,
    events: [
      {
        name: "Global Citizens",
        location: "Remote",
        date: new Date(2023, 10, 11),
      },
    ],
  },
  {
    title: "Web Developer",
    description: <DevTeamCollaborationGitBestPracticesDescription />,
    events: [
      {
        name: "Learn It Global Hackathon",
        location: "Remote",
        date: new Date(2024, 0, 1),
      },
    ],
    recordingURL: "https://github.com/Myzmi/CurrencyGuessr",
  },
  {
    title: "Global Engagement Team Intern",
    description: <GraphQLInGoDescription />,
    events: [
      {
        name: "UW-Madison International Student Services",
        location: "Madison, Wisconsin",
        date: new Date(2022, 8, 9),
      },
    ],
  },
];

const title = "Expereince";
const description = "Featured events I participated/worked on.";

export default function Talks(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {talks.map((talkData) => (
            <Talk key={talkData.title} {...talkData} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
