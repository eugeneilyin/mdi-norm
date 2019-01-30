import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFullscreenExit } from './FilledFullscreenExit';
import { OutlineFullscreenExit } from './OutlineFullscreenExit';
import { RoundFullscreenExit } from './RoundFullscreenExit';
import { SharpFullscreenExit } from './SharpFullscreenExit';
import { TwoToneFullscreenExit } from './TwoToneFullscreenExit';
export var FullscreenExit =
/*#__PURE__*/
function FullscreenExit(props) {
  return createThemedIcon(props, FilledFullscreenExit, OutlineFullscreenExit, RoundFullscreenExit, SharpFullscreenExit, TwoToneFullscreenExit);
};