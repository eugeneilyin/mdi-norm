import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNearMe } from './FilledNearMe';
import { OutlineNearMe } from './OutlineNearMe';
import { RoundNearMe } from './RoundNearMe';
import { SharpNearMe } from './SharpNearMe';
import { TwoToneNearMe } from './TwoToneNearMe';
export var NearMe =
/*#__PURE__*/
function NearMe(props) {
  return createThemedIcon(props, FilledNearMe, OutlineNearMe, RoundNearMe, SharpNearMe, TwoToneNearMe);
};