import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNature } from './FilledNature';
import { OutlineNature } from './OutlineNature';
import { RoundNature } from './RoundNature';
import { SharpNature } from './SharpNature';
import { TwoToneNature } from './TwoToneNature';
export var Nature =
/*#__PURE__*/
function Nature(props) {
  return createThemedIcon(props, FilledNature, OutlineNature, RoundNature, SharpNature, TwoToneNature);
};