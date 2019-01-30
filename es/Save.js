import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSave } from './FilledSave';
import { OutlineSave } from './OutlineSave';
import { RoundSave } from './RoundSave';
import { SharpSave } from './SharpSave';
import { TwoToneSave } from './TwoToneSave';
export var Save =
/*#__PURE__*/
function Save(props) {
  return createThemedIcon(props, FilledSave, OutlineSave, RoundSave, SharpSave, TwoToneSave);
};