import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBuild } from './FilledBuild';
import { OutlineBuild } from './OutlineBuild';
import { RoundBuild } from './RoundBuild';
import { SharpBuild } from './SharpBuild';
import { TwoToneBuild } from './TwoToneBuild';
export var Build =
/*#__PURE__*/
function Build(props) {
  return createThemedIcon(props, FilledBuild, OutlineBuild, RoundBuild, SharpBuild, TwoToneBuild);
};