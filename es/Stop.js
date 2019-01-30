import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStop } from './FilledStop';
import { OutlineStop } from './OutlineStop';
import { RoundStop } from './RoundStop';
import { SharpStop } from './SharpStop';
import { TwoToneStop } from './TwoToneStop';
export var Stop =
/*#__PURE__*/
function Stop(props) {
  return createThemedIcon(props, FilledStop, OutlineStop, RoundStop, SharpStop, TwoToneStop);
};