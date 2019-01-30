import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCallToAction } from './FilledCallToAction';
import { OutlineCallToAction } from './OutlineCallToAction';
import { RoundCallToAction } from './RoundCallToAction';
import { SharpCallToAction } from './SharpCallToAction';
import { TwoToneCallToAction } from './TwoToneCallToAction';
export var CallToAction =
/*#__PURE__*/
function CallToAction(props) {
  return createThemedIcon(props, FilledCallToAction, OutlineCallToAction, RoundCallToAction, SharpCallToAction, TwoToneCallToAction);
};