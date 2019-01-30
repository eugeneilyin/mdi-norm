import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLinkedCamera } from './FilledLinkedCamera';
import { OutlineLinkedCamera } from './OutlineLinkedCamera';
import { RoundLinkedCamera } from './RoundLinkedCamera';
import { SharpLinkedCamera } from './SharpLinkedCamera';
import { TwoToneLinkedCamera } from './TwoToneLinkedCamera';
export var LinkedCamera =
/*#__PURE__*/
function LinkedCamera(props) {
  return createThemedIcon(props, FilledLinkedCamera, OutlineLinkedCamera, RoundLinkedCamera, SharpLinkedCamera, TwoToneLinkedCamera);
};