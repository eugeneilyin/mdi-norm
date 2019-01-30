import { createThemedIcon } from './utils/createThemedIcon'
import { FilledInsertDriveFile } from './FilledInsertDriveFile'
import { OutlineInsertDriveFile } from './OutlineInsertDriveFile'
import { RoundInsertDriveFile } from './RoundInsertDriveFile'
import { SharpInsertDriveFile } from './SharpInsertDriveFile'
import { TwoToneInsertDriveFile } from './TwoToneInsertDriveFile'

export const InsertDriveFile = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledInsertDriveFile, OutlineInsertDriveFile, RoundInsertDriveFile, SharpInsertDriveFile, TwoToneInsertDriveFile)
