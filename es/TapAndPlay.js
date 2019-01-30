import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTapAndPlay } from './FilledTapAndPlay';
import { OutlineTapAndPlay } from './OutlineTapAndPlay';
import { RoundTapAndPlay } from './RoundTapAndPlay';
import { SharpTapAndPlay } from './SharpTapAndPlay';
import { TwoToneTapAndPlay } from './TwoToneTapAndPlay';
export var TapAndPlay =
/*#__PURE__*/
function TapAndPlay(props) {
  return createThemedIcon(props, FilledTapAndPlay, OutlineTapAndPlay, RoundTapAndPlay, SharpTapAndPlay, TwoToneTapAndPlay);
};