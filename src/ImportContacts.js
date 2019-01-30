import { createThemedIcon } from './utils/createThemedIcon'
import { FilledImportContacts } from './FilledImportContacts'
import { OutlineImportContacts } from './OutlineImportContacts'
import { RoundImportContacts } from './RoundImportContacts'
import { SharpImportContacts } from './SharpImportContacts'
import { TwoToneImportContacts } from './TwoToneImportContacts'

export const ImportContacts = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledImportContacts, OutlineImportContacts, RoundImportContacts, SharpImportContacts, TwoToneImportContacts)
