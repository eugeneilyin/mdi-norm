import { createThemedIcon } from './utils/createThemedIcon';
import { FilledShare } from './FilledShare';
import { OutlineShare } from './OutlineShare';
import { RoundShare } from './RoundShare';
import { SharpShare } from './SharpShare';
import { TwoToneShare } from './TwoToneShare';
export var Share =
/*#__PURE__*/
function Share(props) {
  return createThemedIcon(props, FilledShare, OutlineShare, RoundShare, SharpShare, TwoToneShare);
};