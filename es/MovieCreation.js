import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMovieCreation } from './FilledMovieCreation';
import { OutlineMovieCreation } from './OutlineMovieCreation';
import { RoundMovieCreation } from './RoundMovieCreation';
import { SharpMovieCreation } from './SharpMovieCreation';
import { TwoToneMovieCreation } from './TwoToneMovieCreation';
export var MovieCreation =
/*#__PURE__*/
function MovieCreation(props) {
  return createThemedIcon(props, FilledMovieCreation, OutlineMovieCreation, RoundMovieCreation, SharpMovieCreation, TwoToneMovieCreation);
};