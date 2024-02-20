import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";

import BuildingGQLAPIForK8sResDescription from "./assets/talks/_building-gql-api-for-k8s-res.md";
import DevTeamCollaborationGitBestPracticesDescription from "./assets/talks/_dev-team-collaboration-git-best-practices.md";
import GraphQLInGoDescription from "./assets/talks/_graphql-in-go.md";

const talks: TalkMetadata[] = [
  {
    title: "Frontend Developer/UX Designer",
    description: <BuildingGQLAPIForK8sResDescription />,
    events: [
      {
        name: "Global Gamers Hackathon",
        location: "Remote",
        date: new Date(2024, 0, 1),
      },
    ],
  },
  {
    title: "Frontend Developer/Web Developer",
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
        date: new Date(2024, 0, 10),
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
