import React from "react";
import Image from "next/image";
export default function CharacterCard({ character }) {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4 text-black">
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
        className="mx-auto rounded-full"
      />
      <h3 className="text-xl font-semibold">{character.name}</h3>
      <p>
        <b>Species:</b>
        {character.species}
      </p>
      <p>
        <b>Gender:</b>
        {character.gender}
      </p>
    </div>
  );
}
