import { RefinementList } from "react-instantsearch";

const SearchFilter = ({ label, attr }:{ label:string, attr:string }) => (
  <div className='my-3'>
    <h3 className='text-xl mb-3 pt-3'>{label}</h3>
    <RefinementList 
      attribute={attr}
      classNames={{
        checkbox: "checkbox mr-2",
        label: 'label justify-start',
        searchBox: 'form-control'
      }}
    />
  </div>
);

const SearchFilters = () => {
  const filters = [
    {label: 'Type', attr: 'type'},
    {label: 'Game Versions', attr: 'gameVersions'}
  ]

  return (
    <>
      {filters.map((filter) => {
        return <div key={filter.label}><SearchFilter label={filter.label} attr={filter.attr} /></div>
      })}
    </>
  )
}

export default SearchFilters
