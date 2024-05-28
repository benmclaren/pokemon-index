import { BaseHit } from 'instantsearch.js'
import { useLanguage } from "./LanguageState";
import Image from 'next/image';

interface HitProps {
  hit: BaseHit
}

const Hit = ({ hit }: HitProps) => {
  const { language } = useLanguage();

  return (
    <div className="card md:card-compact min-h-full glass bg-mint-cream">
      <figure className="lg:min-h-[379px] object-cover md:h-full p-4 relative">
        <img 
          className="w-1/2 lg:w-full lg:h-full object-cover" 
          src={hit.image} 
          alt={hit?.name?.english} 
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl lg:text-3xl">{hit.name[language]}</h2>
        <div className="flex">
          {hit?.type?.map((type) => (
            <div key={type} className="badge badge-neutral p-2 lg:p-3 mr-2 my-2">
              {type}
            </div>
          ))}
        </div>
        <div className="stats shadow overflow-hidden">
          {Object.keys(hit.base).slice(0, 3).map((stat, i) => (
            <div className="stat place-items-center" key={stat + i}>
              <div className="stat-title">
                {stat}
              </div>
              <div key={stat} className='text-2xl lg:text-4xl stat-value'> 
                {hit.base[stat]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hit
