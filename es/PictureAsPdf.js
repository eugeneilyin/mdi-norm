import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPictureAsPdf } from './FilledPictureAsPdf';
import { OutlinePictureAsPdf } from './OutlinePictureAsPdf';
import { RoundPictureAsPdf } from './RoundPictureAsPdf';
import { SharpPictureAsPdf } from './SharpPictureAsPdf';
import { TwoTonePictureAsPdf } from './TwoTonePictureAsPdf';
export var PictureAsPdf =
/*#__PURE__*/
function PictureAsPdf(props) {
  return createThemedIcon(props, FilledPictureAsPdf, OutlinePictureAsPdf, RoundPictureAsPdf, SharpPictureAsPdf, TwoTonePictureAsPdf);
};