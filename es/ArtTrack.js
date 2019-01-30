import { createThemedIcon } from './utils/createThemedIcon';
import { FilledArtTrack } from './FilledArtTrack';
import { OutlineArtTrack } from './OutlineArtTrack';
import { RoundArtTrack } from './RoundArtTrack';
import { SharpArtTrack } from './SharpArtTrack';
import { TwoToneArtTrack } from './TwoToneArtTrack';
export var ArtTrack =
/*#__PURE__*/
function ArtTrack(props) {
  return createThemedIcon(props, FilledArtTrack, OutlineArtTrack, RoundArtTrack, SharpArtTrack, TwoToneArtTrack);
};