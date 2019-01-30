import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMovieFilter } from './FilledMovieFilter';
import { OutlineMovieFilter } from './OutlineMovieFilter';
import { RoundMovieFilter } from './RoundMovieFilter';
import { SharpMovieFilter } from './SharpMovieFilter';
import { TwoToneMovieFilter } from './TwoToneMovieFilter';
export var MovieFilter =
/*#__PURE__*/
function MovieFilter(props) {
  return createThemedIcon(props, FilledMovieFilter, OutlineMovieFilter, RoundMovieFilter, SharpMovieFilter, TwoToneMovieFilter);
};