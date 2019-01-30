import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPictureInPictureAlt } from './FilledPictureInPictureAlt';
import { OutlinePictureInPictureAlt } from './OutlinePictureInPictureAlt';
import { RoundPictureInPictureAlt } from './RoundPictureInPictureAlt';
import { SharpPictureInPictureAlt } from './SharpPictureInPictureAlt';
import { TwoTonePictureInPictureAlt } from './TwoTonePictureInPictureAlt';
export var PictureInPictureAlt =
/*#__PURE__*/
function PictureInPictureAlt(props) {
  return createThemedIcon(props, FilledPictureInPictureAlt, OutlinePictureInPictureAlt, RoundPictureInPictureAlt, SharpPictureInPictureAlt, TwoTonePictureInPictureAlt);
};