import React from "react";
import Card from "./components/Card";

const App = () => {
  const webSeriesData = [
    {
      id: 1,
      title: "Stranger Things",
      rating: 4.8,
      summary: "A group of kids uncover supernatural mysteries in their small town involving secret experiments and parallel dimensions.",
    },
    {
      id: 2,
      title: "Breaking Bad",
      rating: 4.9,
      summary: "A chemistry teacher turns into a drug kingpin after being diagnosed with cancer, leading to intense moral conflicts.",
    },
    {
      id: 3,
      title: "Money Heist",
      rating: 4.7,
      summary: "A criminal mastermind known as The Professor leads a group to execute the biggest heist in history.",
    },
    {
      id: 4,
      title: "The Witcher",
      rating: 4.6,
      summary: "A monster hunter struggles to find his place in a world where people are often more wicked than beasts.",
    },
    {
      id: 5,
      title: "Dark",
      rating: 4.8,
      summary: "A time-travel mystery unfolds in a German town, connecting four families across multiple generations.",
    },
    {
      id: 6,
      title: "Game of Thrones",
      rating: 4.5,
      summary: "Noble families fight for control of the Iron Throne while an ancient enemy returns from the north.",
    },
    {
      id: 7,
      title: "The Boys",
      rating: 4.7,
      summary: "A group of vigilantes takes on corrupt superheroes who abuse their powers for fame and control.",
    },
    {
      id: 8,
      title: "Wednesday",
      rating: 4.4,
      summary: "Wednesday Addams navigates school life while solving a supernatural mystery tied to her family.",
    },
    {
      id: 9,
      title: "Loki",
      rating: 4.6,
      summary: "The God of Mischief gets entangled in time-variant chaos while working with a mysterious agency.",
    },
    {
      id: 10,
      title: "Squid Game",
      rating: 4.7,
      summary: "Hundreds of players risk their lives in deadly games for a massive cash prize.",
    },
  ];

  return (
    <div className="p-5 grid grid-cols-1  lg:grid-cols-2 min-h-screen bg-black/95 text-white gap-3">
      {webSeriesData.map((webseries) => {
        return <Card key={webseries.id} webseries={webseries} />;
      })}
    </div>
  );
};

export default App;
