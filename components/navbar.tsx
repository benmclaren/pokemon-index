// import { useLanguage } from '../components/LanguageState';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { SearchBox } from 'react-instantsearch';
import Image from 'next/image';
import pokedexLogo from "@/public/pokedex-logo.png"

export default async function Nav() {
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
      <div className="flex-none gap-2">
        <div className="form-control">
          {/* <SearchBox className="input input-bordered w-24 md:w-auto" placeholder="Search for Pokémon..."/> */}
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <LanguageSwitcher />
    </div>
  </div>
  )
}
