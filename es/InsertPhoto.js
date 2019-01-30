import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInsertPhoto } from './FilledInsertPhoto';
import { OutlineInsertPhoto } from './OutlineInsertPhoto';
import { RoundInsertPhoto } from './RoundInsertPhoto';
import { SharpInsertPhoto } from './SharpInsertPhoto';
import { TwoToneInsertPhoto } from './TwoToneInsertPhoto';
export var InsertPhoto =
/*#__PURE__*/
function InsertPhoto(props) {
  return createThemedIcon(props, FilledInsertPhoto, OutlineInsertPhoto, RoundInsertPhoto, SharpInsertPhoto, TwoToneInsertPhoto);
};