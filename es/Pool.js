import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPool } from './FilledPool';
import { OutlinePool } from './OutlinePool';
import { RoundPool } from './RoundPool';
import { SharpPool } from './SharpPool';
import { TwoTonePool } from './TwoTonePool';
export var Pool =
/*#__PURE__*/
function Pool(props) {
  return createThemedIcon(props, FilledPool, OutlinePool, RoundPool, SharpPool, TwoTonePool);
};