import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddToPhotos } from './FilledAddToPhotos';
import { OutlineAddToPhotos } from './OutlineAddToPhotos';
import { RoundAddToPhotos } from './RoundAddToPhotos';
import { SharpAddToPhotos } from './SharpAddToPhotos';
import { TwoToneAddToPhotos } from './TwoToneAddToPhotos';
export var AddToPhotos =
/*#__PURE__*/
function AddToPhotos(props) {
  return createThemedIcon(props, FilledAddToPhotos, OutlineAddToPhotos, RoundAddToPhotos, SharpAddToPhotos, TwoToneAddToPhotos);
};