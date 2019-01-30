import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddAPhoto } from './FilledAddAPhoto';
import { OutlineAddAPhoto } from './OutlineAddAPhoto';
import { RoundAddAPhoto } from './RoundAddAPhoto';
import { SharpAddAPhoto } from './SharpAddAPhoto';
import { TwoToneAddAPhoto } from './TwoToneAddAPhoto';
export var AddAPhoto =
/*#__PURE__*/
function AddAPhoto(props) {
  return createThemedIcon(props, FilledAddAPhoto, OutlineAddAPhoto, RoundAddAPhoto, SharpAddAPhoto, TwoToneAddAPhoto);
};