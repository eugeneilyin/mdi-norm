import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStyle } from './FilledStyle';
import { OutlineStyle } from './OutlineStyle';
import { RoundStyle } from './RoundStyle';
import { SharpStyle } from './SharpStyle';
import { TwoToneStyle } from './TwoToneStyle';
export var Style =
/*#__PURE__*/
function Style(props) {
  return createThemedIcon(props, FilledStyle, OutlineStyle, RoundStyle, SharpStyle, TwoToneStyle);
};