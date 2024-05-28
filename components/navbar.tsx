"use client"
// import { useLanguage } from '../components/LanguageState';

import LanguageSwitcher from '../components/LanguageSwitcher';
import { SearchBox } from 'react-instantsearch';
import Image from 'next/image';
import pokedexLogo from "@/public/pokedex-logo.png"

const Nav = () => {
  return (
    <div className="navbar p-4 custom-navbar sticky top-0 z-10">
      <div className="flex-1">
      <Image
        src={pokedexLogo}
        width={150}
        height={200}
        alt="pokedex logo"
      />
      </div>
      <div className="block sm:flex gap-2 text-end">
        <div className="form-control">
          <SearchBox className="input input-bordered md:w-auto flex items-center" placeholder="Search for Pokémon..."/>
        </div>
        <LanguageSwitcher className="text-end"/>
    </div>
  </div>
  )
}

export default Nav;
