import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPictureInPicture } from './FilledPictureInPicture';
import { OutlinePictureInPicture } from './OutlinePictureInPicture';
import { RoundPictureInPicture } from './RoundPictureInPicture';
import { SharpPictureInPicture } from './SharpPictureInPicture';
import { TwoTonePictureInPicture } from './TwoTonePictureInPicture';
export var PictureInPicture =
/*#__PURE__*/
function PictureInPicture(props) {
  return createThemedIcon(props, FilledPictureInPicture, OutlinePictureInPicture, RoundPictureInPicture, SharpPictureInPicture, TwoTonePictureInPicture);
};