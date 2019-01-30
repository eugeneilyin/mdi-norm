import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalMovies } from './FilledLocalMovies';
import { OutlineLocalMovies } from './OutlineLocalMovies';
import { RoundLocalMovies } from './RoundLocalMovies';
import { SharpLocalMovies } from './SharpLocalMovies';
import { TwoToneLocalMovies } from './TwoToneLocalMovies';
export var LocalMovies =
/*#__PURE__*/
function LocalMovies(props) {
  return createThemedIcon(props, FilledLocalMovies, OutlineLocalMovies, RoundLocalMovies, SharpLocalMovies, TwoToneLocalMovies);
};