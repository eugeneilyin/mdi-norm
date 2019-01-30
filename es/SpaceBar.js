import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSpaceBar } from './FilledSpaceBar';
import { OutlineSpaceBar } from './OutlineSpaceBar';
import { RoundSpaceBar } from './RoundSpaceBar';
import { SharpSpaceBar } from './SharpSpaceBar';
import { TwoToneSpaceBar } from './TwoToneSpaceBar';
export var SpaceBar =
/*#__PURE__*/
function SpaceBar(props) {
  return createThemedIcon(props, FilledSpaceBar, OutlineSpaceBar, RoundSpaceBar, SharpSpaceBar, TwoToneSpaceBar);
};