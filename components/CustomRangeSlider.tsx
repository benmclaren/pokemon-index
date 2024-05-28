import { useRange } from 'react-instantsearch';
import Slider from 'rc-slider';

const CustomRangeSlider = ({ attribute }: { attribute: string }) => {
  const { range, start, canRefine, refine } = useRange({ attribute });

  if (!canRefine) return null;

  const handleChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      refine([values[0], values[1]]);
    }
  };

  const [startMin, startMax] = start.map(value => value ?? range.min);

  return (
    <div className="p-4">
      <h3 className="text-xl mt-6 mb-3 pt-3 border-t-2">Attack Range</h3>
      <Slider
        range
        min={range.min}
        max={range.max}
        defaultValue={[startMin as number, startMax as number]}
        onAfterChange={handleChange}
      />
      <div className="flex justify-between mt-2">
        <span>{range.min}</span>
        <span>{range.max}</span>
      </div>
    </div>
  );
};

export default CustomRangeSlider;
