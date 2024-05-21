import algoliasearch from "algoliasearch"
import * as dotenv from "dotenv"

dotenv.config({
  path: ".env.local",
})

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID, 
  process.env.ALGOLIA_ADMIN
)

const algoliaIndex = client.initIndex("pokemon")

const fetchPokemonData = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemonData = await response.json()
    console.log(pokemonData)
    const imageUrl = pokemonData.sprites.other['official-artwork'].front_default
    const gameVersions = pokemonData.game_indicies
    // console.log(typeof gameVersions)
  } catch (err) {
    console.log(err)
  }
};

const fetchAlgoliaData = async () => {
  const algoliaHits = [];
  await algoliaIndex.browseObjects({
    query: '',
    batch: batch => {
      batch.forEach(hit => {
        algoliaHits.push(hit)
        // console.log(hit.id)
        const algoliaPokemonId = hit.id
        fetchPokemonData(algoliaPokemonId)
      })
    }
  })
  return algoliaHits
};

const combinedData = async () => {
  // const pokemonData = fetchPokemonData()
  const algoliaData = fetchAlgoliaData()  
}




// combinedData()
fetchAlgoliaData()
// fetchPokemon()


