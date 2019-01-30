import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInfo } from './FilledInfo';
import { OutlineInfo } from './OutlineInfo';
import { RoundInfo } from './RoundInfo';
import { SharpInfo } from './SharpInfo';
import { TwoToneInfo } from './TwoToneInfo';
export var Info =
/*#__PURE__*/
function Info(props) {
  return createThemedIcon(props, FilledInfo, OutlineInfo, RoundInfo, SharpInfo, TwoToneInfo);
};