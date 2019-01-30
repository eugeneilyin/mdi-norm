import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVideoLibrary } from './FilledVideoLibrary';
import { OutlineVideoLibrary } from './OutlineVideoLibrary';
import { RoundVideoLibrary } from './RoundVideoLibrary';
import { SharpVideoLibrary } from './SharpVideoLibrary';
import { TwoToneVideoLibrary } from './TwoToneVideoLibrary';
export var VideoLibrary =
/*#__PURE__*/
function VideoLibrary(props) {
  return createThemedIcon(props, FilledVideoLibrary, OutlineVideoLibrary, RoundVideoLibrary, SharpVideoLibrary, TwoToneVideoLibrary);
};