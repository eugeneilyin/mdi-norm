import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPermMedia } from './FilledPermMedia';
import { OutlinePermMedia } from './OutlinePermMedia';
import { RoundPermMedia } from './RoundPermMedia';
import { SharpPermMedia } from './SharpPermMedia';
import { TwoTonePermMedia } from './TwoTonePermMedia';
export var PermMedia =
/*#__PURE__*/
function PermMedia(props) {
  return createThemedIcon(props, FilledPermMedia, OutlinePermMedia, RoundPermMedia, SharpPermMedia, TwoTonePermMedia);
};