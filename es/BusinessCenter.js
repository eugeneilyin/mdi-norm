import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBusinessCenter } from './FilledBusinessCenter';
import { OutlineBusinessCenter } from './OutlineBusinessCenter';
import { RoundBusinessCenter } from './RoundBusinessCenter';
import { SharpBusinessCenter } from './SharpBusinessCenter';
import { TwoToneBusinessCenter } from './TwoToneBusinessCenter';
export var BusinessCenter =
/*#__PURE__*/
function BusinessCenter(props) {
  return createThemedIcon(props, FilledBusinessCenter, OutlineBusinessCenter, RoundBusinessCenter, SharpBusinessCenter, TwoToneBusinessCenter);
};