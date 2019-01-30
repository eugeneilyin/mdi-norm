import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhotoFilter } from './FilledPhotoFilter';
import { OutlinePhotoFilter } from './OutlinePhotoFilter';
import { RoundPhotoFilter } from './RoundPhotoFilter';
import { SharpPhotoFilter } from './SharpPhotoFilter';
import { TwoTonePhotoFilter } from './TwoTonePhotoFilter';
export var PhotoFilter =
/*#__PURE__*/
function PhotoFilter(props) {
  return createThemedIcon(props, FilledPhotoFilter, OutlinePhotoFilter, RoundPhotoFilter, SharpPhotoFilter, TwoTonePhotoFilter);
};