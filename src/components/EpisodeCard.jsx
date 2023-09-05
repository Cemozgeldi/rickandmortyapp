import React from "react";

export default function EpisodeCard({ episode }) {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4 text-black">
      <h3 className="text-xl font-semibold">{episode.name}</h3>
      <p>
        <b>Episode:</b>
        {episode.episode}
      </p>
      <p>
        <b>Air Date:</b>
        {episode.air_date}
      </p>
    </div>
  );
}
