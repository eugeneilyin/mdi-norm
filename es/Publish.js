import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPublish } from './FilledPublish';
import { OutlinePublish } from './OutlinePublish';
import { RoundPublish } from './RoundPublish';
import { SharpPublish } from './SharpPublish';
import { TwoTonePublish } from './TwoTonePublish';
export var Publish =
/*#__PURE__*/
function Publish(props) {
  return createThemedIcon(props, FilledPublish, OutlinePublish, RoundPublish, SharpPublish, TwoTonePublish);
};