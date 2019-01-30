import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInsertDriveFile } from './FilledInsertDriveFile';
import { OutlineInsertDriveFile } from './OutlineInsertDriveFile';
import { RoundInsertDriveFile } from './RoundInsertDriveFile';
import { SharpInsertDriveFile } from './SharpInsertDriveFile';
import { TwoToneInsertDriveFile } from './TwoToneInsertDriveFile';
export var InsertDriveFile =
/*#__PURE__*/
function InsertDriveFile(props) {
  return createThemedIcon(props, FilledInsertDriveFile, OutlineInsertDriveFile, RoundInsertDriveFile, SharpInsertDriveFile, TwoToneInsertDriveFile);
};