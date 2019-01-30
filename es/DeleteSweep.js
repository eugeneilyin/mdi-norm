import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDeleteSweep } from './FilledDeleteSweep';
import { OutlineDeleteSweep } from './OutlineDeleteSweep';
import { RoundDeleteSweep } from './RoundDeleteSweep';
import { SharpDeleteSweep } from './SharpDeleteSweep';
import { TwoToneDeleteSweep } from './TwoToneDeleteSweep';
export var DeleteSweep =
/*#__PURE__*/
function DeleteSweep(props) {
  return createThemedIcon(props, FilledDeleteSweep, OutlineDeleteSweep, RoundDeleteSweep, SharpDeleteSweep, TwoToneDeleteSweep);
};