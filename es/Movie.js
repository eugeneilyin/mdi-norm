import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMovie } from './FilledMovie';
import { OutlineMovie } from './OutlineMovie';
import { RoundMovie } from './RoundMovie';
import { SharpMovie } from './SharpMovie';
import { TwoToneMovie } from './TwoToneMovie';
export var Movie =
/*#__PURE__*/
function Movie(props) {
  return createThemedIcon(props, FilledMovie, OutlineMovie, RoundMovie, SharpMovie, TwoToneMovie);
};