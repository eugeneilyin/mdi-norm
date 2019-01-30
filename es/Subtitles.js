import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSubtitles } from './FilledSubtitles';
import { OutlineSubtitles } from './OutlineSubtitles';
import { RoundSubtitles } from './RoundSubtitles';
import { SharpSubtitles } from './SharpSubtitles';
import { TwoToneSubtitles } from './TwoToneSubtitles';
export var Subtitles =
/*#__PURE__*/
function Subtitles(props) {
  return createThemedIcon(props, FilledSubtitles, OutlineSubtitles, RoundSubtitles, SharpSubtitles, TwoToneSubtitles);
};