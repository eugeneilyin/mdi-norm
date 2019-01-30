import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTagFaces } from './FilledTagFaces';
import { OutlineTagFaces } from './OutlineTagFaces';
import { RoundTagFaces } from './RoundTagFaces';
import { SharpTagFaces } from './SharpTagFaces';
import { TwoToneTagFaces } from './TwoToneTagFaces';
export var TagFaces =
/*#__PURE__*/
function TagFaces(props) {
  return createThemedIcon(props, FilledTagFaces, OutlineTagFaces, RoundTagFaces, SharpTagFaces, TwoToneTagFaces);
};