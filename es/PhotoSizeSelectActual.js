import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhotoSizeSelectActual } from './FilledPhotoSizeSelectActual';
import { OutlinePhotoSizeSelectActual } from './OutlinePhotoSizeSelectActual';
import { RoundPhotoSizeSelectActual } from './RoundPhotoSizeSelectActual';
import { SharpPhotoSizeSelectActual } from './SharpPhotoSizeSelectActual';
import { TwoTonePhotoSizeSelectActual } from './TwoTonePhotoSizeSelectActual';
export var PhotoSizeSelectActual =
/*#__PURE__*/
function PhotoSizeSelectActual(props) {
  return createThemedIcon(props, FilledPhotoSizeSelectActual, OutlinePhotoSizeSelectActual, RoundPhotoSizeSelectActual, SharpPhotoSizeSelectActual, TwoTonePhotoSizeSelectActual);
};