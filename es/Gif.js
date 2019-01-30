import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGif } from './FilledGif';
import { OutlineGif } from './OutlineGif';
import { RoundGif } from './RoundGif';
import { SharpGif } from './SharpGif';
import { TwoToneGif } from './TwoToneGif';
export var Gif =
/*#__PURE__*/
function Gif(props) {
  return createThemedIcon(props, FilledGif, OutlineGif, RoundGif, SharpGif, TwoToneGif);
};