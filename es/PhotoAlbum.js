import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhotoAlbum } from './FilledPhotoAlbum';
import { OutlinePhotoAlbum } from './OutlinePhotoAlbum';
import { RoundPhotoAlbum } from './RoundPhotoAlbum';
import { SharpPhotoAlbum } from './SharpPhotoAlbum';
import { TwoTonePhotoAlbum } from './TwoTonePhotoAlbum';
export var PhotoAlbum =
/*#__PURE__*/
function PhotoAlbum(props) {
  return createThemedIcon(props, FilledPhotoAlbum, OutlinePhotoAlbum, RoundPhotoAlbum, SharpPhotoAlbum, TwoTonePhotoAlbum);
};