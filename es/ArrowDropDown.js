import { createThemedIcon } from './utils/createThemedIcon';
import { FilledArrowDropDown } from './FilledArrowDropDown';
import { OutlineArrowDropDown } from './OutlineArrowDropDown';
import { RoundArrowDropDown } from './RoundArrowDropDown';
import { SharpArrowDropDown } from './SharpArrowDropDown';
import { TwoToneArrowDropDown } from './TwoToneArrowDropDown';
export var ArrowDropDown =
/*#__PURE__*/
function ArrowDropDown(props) {
  return createThemedIcon(props, FilledArrowDropDown, OutlineArrowDropDown, RoundArrowDropDown, SharpArrowDropDown, TwoToneArrowDropDown);
};