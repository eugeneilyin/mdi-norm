import { createThemedIcon } from './utils/createThemedIcon';
import { FilledExplore } from './FilledExplore';
import { OutlineExplore } from './OutlineExplore';
import { RoundExplore } from './RoundExplore';
import { SharpExplore } from './SharpExplore';
import { TwoToneExplore } from './TwoToneExplore';
export var Explore =
/*#__PURE__*/
function Explore(props) {
  return createThemedIcon(props, FilledExplore, OutlineExplore, RoundExplore, SharpExplore, TwoToneExplore);
};