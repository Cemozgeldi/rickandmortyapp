import React from "react";
import { useQuery } from "react-query";
import CharacterCard from "./CharacterCard";
const fetchCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  return res.json();
};
export default function Characters() {
  const { data, status } = useQuery("characters", fetchCharacters);
  console.log(data);
  return (
    <div>
      <h2>Characters</h2>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-4">
          {data.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}
