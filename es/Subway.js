import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSubway } from './FilledSubway';
import { OutlineSubway } from './OutlineSubway';
import { RoundSubway } from './RoundSubway';
import { SharpSubway } from './SharpSubway';
import { TwoToneSubway } from './TwoToneSubway';
export var Subway =
/*#__PURE__*/
function Subway(props) {
  return createThemedIcon(props, FilledSubway, OutlineSubway, RoundSubway, SharpSubway, TwoToneSubway);
};