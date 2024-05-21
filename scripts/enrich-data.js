import algoliasearch from "algoliasearch";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.ALGOLIA_ADMIN
);

const algoliaIndex = client.initIndex("pokemon");

const fetchPokemonData = async (hit) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${hit.id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const pokemonData = await response.json();
    const imageUrl = pokemonData.sprites.other['official-artwork'].front_default;
    const gameVersions = pokemonData.game_indices.map((game) => game.version.name);

    return {
      ...hit,
      objectID: hit.objectID,
      imageUrl,
      gameVersions
    };
  } catch (err) {
    
  }
};

const fetchAlgoliaData = async () => {
  let algoliaHits = [];
  await algoliaIndex.browseObjects({
    query: '',
    batch: (batch) => {
      algoliaHits = algoliaHits.concat(batch);
    },
  });

  const updatedRecordsPromises = algoliaHits.map(async (hit) => {
    const updatedRecord = await fetchPokemonData(hit);
    return updatedRecord;
  });

  const updatedRecords = await Promise.all(updatedRecordsPromises);
  return updatedRecords.filter(hit => hit);
};

const combinedData = async () => {
  try {
    const algoliaData = await fetchAlgoliaData();

    if (algoliaData.length > 0) {
      await algoliaIndex.partialUpdateObjects(algoliaData)
        .then((response) => {
          // console.log("Update response:", response);
          // console.log("Algolia data successfully updated!");
        })
        .catch((err) => {
          // console.error("Error during Algolia update:", err);
        });
    } else {
      // console.log("No data to update.");
    }
  } catch (err) {
    console.log(err);
  }
};


combinedData()
