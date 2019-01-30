import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBackup } from './FilledBackup';
import { OutlineBackup } from './OutlineBackup';
import { RoundBackup } from './RoundBackup';
import { SharpBackup } from './SharpBackup';
import { TwoToneBackup } from './TwoToneBackup';
export var Backup =
/*#__PURE__*/
function Backup(props) {
  return createThemedIcon(props, FilledBackup, OutlineBackup, RoundBackup, SharpBackup, TwoToneBackup);
};