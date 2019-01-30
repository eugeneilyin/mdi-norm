import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRepeatOne } from './FilledRepeatOne';
import { OutlineRepeatOne } from './OutlineRepeatOne';
import { RoundRepeatOne } from './RoundRepeatOne';
import { SharpRepeatOne } from './SharpRepeatOne';
import { TwoToneRepeatOne } from './TwoToneRepeatOne';
export var RepeatOne =
/*#__PURE__*/
function RepeatOne(props) {
  return createThemedIcon(props, FilledRepeatOne, OutlineRepeatOne, RoundRepeatOne, SharpRepeatOne, TwoToneRepeatOne);
};