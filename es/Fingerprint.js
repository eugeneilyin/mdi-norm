import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFingerprint } from './FilledFingerprint';
import { OutlineFingerprint } from './OutlineFingerprint';
import { RoundFingerprint } from './RoundFingerprint';
import { SharpFingerprint } from './SharpFingerprint';
import { TwoToneFingerprint } from './TwoToneFingerprint';
export var Fingerprint =
/*#__PURE__*/
function Fingerprint(props) {
  return createThemedIcon(props, FilledFingerprint, OutlineFingerprint, RoundFingerprint, SharpFingerprint, TwoToneFingerprint);
};