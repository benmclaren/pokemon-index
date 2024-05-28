"use client"

import SearchPage from "../components/products/SearchPage"
import { LanguageProvider } from '../components/LanguageState';
import Nav from "@/components/navbar";
import { InstantSearch } from "react-instantsearch";
import algoliasearch from "algoliasearch";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH as string
);

export default function Home() {
  return (
    <InstantSearch searchClient={searchClient} indexName="pokemon">
      <LanguageProvider>
        <Nav />
        <SearchPage />
      </LanguageProvider>
    </InstantSearch>
  );
}
