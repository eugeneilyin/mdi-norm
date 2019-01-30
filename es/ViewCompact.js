import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewCompact } from './FilledViewCompact';
import { OutlineViewCompact } from './OutlineViewCompact';
import { RoundViewCompact } from './RoundViewCompact';
import { SharpViewCompact } from './SharpViewCompact';
import { TwoToneViewCompact } from './TwoToneViewCompact';
export var ViewCompact =
/*#__PURE__*/
function ViewCompact(props) {
  return createThemedIcon(props, FilledViewCompact, OutlineViewCompact, RoundViewCompact, SharpViewCompact, TwoToneViewCompact);
};