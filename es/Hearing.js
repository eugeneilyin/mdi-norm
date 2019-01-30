import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHearing } from './FilledHearing';
import { OutlineHearing } from './OutlineHearing';
import { RoundHearing } from './RoundHearing';
import { SharpHearing } from './SharpHearing';
import { TwoToneHearing } from './TwoToneHearing';
export var Hearing =
/*#__PURE__*/
function Hearing(props) {
  return createThemedIcon(props, FilledHearing, OutlineHearing, RoundHearing, SharpHearing, TwoToneHearing);
};