"use client"

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, RangeInput, RefinementList, useRange } from 'react-instantsearch';
import { RangeSlider as SpectrumRangeSlider } from '@adobe/react-spectrum';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useLanguage } from '../../components/LanguageState';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import Nav from "@/components/navbar";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH
);

const Hit = ({ hit }) => {
  const { language } = useLanguage();
  return (
    <div className="card min-h-full glass bg-mint-cream">
      <figure>
        <img className="max-h-[359px] object-cover md:h-full p-4" src={hit.image} alt={hit.name.english} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-3xl">{hit.name[language]}</h2>
        <div className="flex">
          {hit.type.map((type) => (
            <div key={type} className="badge badge-neutral p-3 mr-2 my-2">
              {type}
            </div>
          ))}
        </div>
        <div className="stats shadow">
          {Object.keys(hit.base).slice(0, 3).map(stat => (
            <div className="stat place-items-center">
              <div key={stat} className="stat-title">
                {stat}
              </div>
              <div key={stat} className='stat-value'> 
                {hit.base[stat]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CustomHits = () => (
  <div>
    <Hits hitComponent={Hit} 
    className="grid grid-cols-1 md:grid-cols-3 gap-4"
    />
  </div>
);

const TypeFilter = () => (
  <div className='my-3'>
    <h3 className='text-xl mb-3 pt-3'>Type</h3>
    <RefinementList 
      attribute="type"
      classNames={{
        checkbox: "checkbox mr-2",
        label: 'label justify-start',
        searchBox: 'form-control'
      }}
    />
  </div>
);

const GameVersionFilter = () => (
  <div className='my-3'>
    <h3 className='text-xl mt-6 mb-3 pt-3 border-t-2'>Game Versions</h3>
    <RefinementList 
      attribute="gameVersions"
      classNames={{
        checkbox: "checkbox mr-2",
        label: 'label justify-start',
        searchBox: 'form-control'
      }}
    />
  </div>
);


const CustomRangeSlider = ({ attribute }) => {
  const { range, start, canRefine, refine } = useRange({ attribute });

  if (!canRefine) return null;

  const handleChange = (values) => {
    refine([values[0], values[1]]);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl mt-6 mb-3 pt-3 border-t-2">Attack Range</h3>
      <Slider
        range
        min={range.min}
        max={range.max}
        defaultValue={start}
        onAfterChange={handleChange}
      />
      <div className="flex justify-between mt-2">
        <span>{range.min}</span>
        <span>{range.max}</span>
      </div>
    </div>
  );
};





const Search = () => (
  <div>

    {/* <Nav /> */}
    <div className="p-4 flex">
      <InstantSearch searchClient={searchClient} indexName="pokemon">
        <SearchBox 
          placeholder="Search for pokemon.."
          classNames={{
            input:
            " h-full w-50 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          submitIcon: "hidden",
          form: "relative mb-4",
          resetIcon: "hidden",
          
          }}
        />
        
          <div className=" w-100 p-3 mr-3 font-medium sticky top-850" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
            <div>
              <TypeFilter />
            </div>
            <div>
              <GameVersionFilter />
            </div>
            <div>
              <CustomRangeSlider attribute="base.Attack"/>
            </div>
          </div>
          <CustomHits />
        
      </InstantSearch>
    </div>
  </div>
);

export default Search;



