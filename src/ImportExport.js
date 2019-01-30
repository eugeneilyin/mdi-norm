import { createThemedIcon } from './utils/createThemedIcon'
import { FilledImportExport } from './FilledImportExport'
import { OutlineImportExport } from './OutlineImportExport'
import { RoundImportExport } from './RoundImportExport'
import { SharpImportExport } from './SharpImportExport'
import { TwoToneImportExport } from './TwoToneImportExport'

export const ImportExport = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledImportExport, OutlineImportExport, RoundImportExport, SharpImportExport, TwoToneImportExport)
