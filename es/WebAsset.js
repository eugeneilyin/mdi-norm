import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWebAsset } from './FilledWebAsset';
import { OutlineWebAsset } from './OutlineWebAsset';
import { RoundWebAsset } from './RoundWebAsset';
import { SharpWebAsset } from './SharpWebAsset';
import { TwoToneWebAsset } from './TwoToneWebAsset';
export var WebAsset =
/*#__PURE__*/
function WebAsset(props) {
  return createThemedIcon(props, FilledWebAsset, OutlineWebAsset, RoundWebAsset, SharpWebAsset, TwoToneWebAsset);
};