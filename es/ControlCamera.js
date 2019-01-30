import { createThemedIcon } from './utils/createThemedIcon';
import { FilledControlCamera } from './FilledControlCamera';
import { OutlineControlCamera } from './OutlineControlCamera';
import { RoundControlCamera } from './RoundControlCamera';
import { SharpControlCamera } from './SharpControlCamera';
import { TwoToneControlCamera } from './TwoToneControlCamera';
export var ControlCamera =
/*#__PURE__*/
function ControlCamera(props) {
  return createThemedIcon(props, FilledControlCamera, OutlineControlCamera, RoundControlCamera, SharpControlCamera, TwoToneControlCamera);
};