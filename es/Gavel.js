import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGavel } from './FilledGavel';
import { OutlineGavel } from './OutlineGavel';
import { RoundGavel } from './RoundGavel';
import { SharpGavel } from './SharpGavel';
import { TwoToneGavel } from './TwoToneGavel';
export var Gavel =
/*#__PURE__*/
function Gavel(props) {
  return createThemedIcon(props, FilledGavel, OutlineGavel, RoundGavel, SharpGavel, TwoToneGavel);
};