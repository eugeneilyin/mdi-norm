import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLineStyle } from './FilledLineStyle';
import { OutlineLineStyle } from './OutlineLineStyle';
import { RoundLineStyle } from './RoundLineStyle';
import { SharpLineStyle } from './SharpLineStyle';
import { TwoToneLineStyle } from './TwoToneLineStyle';
export var LineStyle =
/*#__PURE__*/
function LineStyle(props) {
  return createThemedIcon(props, FilledLineStyle, OutlineLineStyle, RoundLineStyle, SharpLineStyle, TwoToneLineStyle);
};