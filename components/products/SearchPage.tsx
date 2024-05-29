"use client"

import { InstantSearch, SearchBox, Hits, RangeInput, RefinementList, Pagination } from 'react-instantsearch';
import 'rc-slider/assets/index.css';
import CustomRangeSlider from '../CustomRangeSlider';
import Hit from '../Hit';
import SearchFilters from '../SearchFilters';

const CustomHits = () => (
  <section className='container'>
    <Hits hitComponent={Hit} 
      className=""
    />
    <Pagination />
  </section>
);

const SearchPage = () => (
  <main className="p-4 md:flex">    
    <div className="sidebar-wrapper">
      <div className="w-100 p-3 mr-3 font-medium sticky top-32">
        <SearchFilters />
        <CustomRangeSlider attribute="base.Attack"/>
      </div>
    </div>
    <CustomHits />
  </main>
);

export default SearchPage;



