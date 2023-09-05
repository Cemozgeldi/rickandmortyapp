import React from "react";
import { useQuery } from "react-query";
import EpisodeCard from "./EpisodeCard";
const fetchEpisodes = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  return res.json();
};

export default function Episodes() {
  const { data, status } = useQuery("episodes", fetchEpisodes);
  console.log(data);
  return (
    <div>
      <h2>Episodes</h2>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-4">
          {data.results.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      )}
    </div>
  );
}
