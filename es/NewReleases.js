import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNewReleases } from './FilledNewReleases';
import { OutlineNewReleases } from './OutlineNewReleases';
import { RoundNewReleases } from './RoundNewReleases';
import { SharpNewReleases } from './SharpNewReleases';
import { TwoToneNewReleases } from './TwoToneNewReleases';
export var NewReleases =
/*#__PURE__*/
function NewReleases(props) {
  return createThemedIcon(props, FilledNewReleases, OutlineNewReleases, RoundNewReleases, SharpNewReleases, TwoToneNewReleases);
};