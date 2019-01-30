import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPortrait } from './FilledPortrait';
import { OutlinePortrait } from './OutlinePortrait';
import { RoundPortrait } from './RoundPortrait';
import { SharpPortrait } from './SharpPortrait';
import { TwoTonePortrait } from './TwoTonePortrait';
export var Portrait =
/*#__PURE__*/
function Portrait(props) {
  return createThemedIcon(props, FilledPortrait, OutlinePortrait, RoundPortrait, SharpPortrait, TwoTonePortrait);
};