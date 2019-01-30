import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGesture } from './FilledGesture';
import { OutlineGesture } from './OutlineGesture';
import { RoundGesture } from './RoundGesture';
import { SharpGesture } from './SharpGesture';
import { TwoToneGesture } from './TwoToneGesture';
export var Gesture =
/*#__PURE__*/
function Gesture(props) {
  return createThemedIcon(props, FilledGesture, OutlineGesture, RoundGesture, SharpGesture, TwoToneGesture);
};