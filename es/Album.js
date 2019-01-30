import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAlbum } from './FilledAlbum';
import { OutlineAlbum } from './OutlineAlbum';
import { RoundAlbum } from './RoundAlbum';
import { SharpAlbum } from './SharpAlbum';
import { TwoToneAlbum } from './TwoToneAlbum';
export var Album =
/*#__PURE__*/
function Album(props) {
  return createThemedIcon(props, FilledAlbum, OutlineAlbum, RoundAlbum, SharpAlbum, TwoToneAlbum);
};