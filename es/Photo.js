import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhoto } from './FilledPhoto';
import { OutlinePhoto } from './OutlinePhoto';
import { RoundPhoto } from './RoundPhoto';
import { SharpPhoto } from './SharpPhoto';
import { TwoTonePhoto } from './TwoTonePhoto';
export var Photo =
/*#__PURE__*/
function Photo(props) {
  return createThemedIcon(props, FilledPhoto, OutlinePhoto, RoundPhoto, SharpPhoto, TwoTonePhoto);
};