import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalPostOffice } from './FilledLocalPostOffice'
import { OutlineLocalPostOffice } from './OutlineLocalPostOffice'
import { RoundLocalPostOffice } from './RoundLocalPostOffice'
import { SharpLocalPostOffice } from './SharpLocalPostOffice'
import { TwoToneLocalPostOffice } from './TwoToneLocalPostOffice'

export const LocalPostOffice = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalPostOffice, OutlineLocalPostOffice, RoundLocalPostOffice, SharpLocalPostOffice, TwoToneLocalPostOffice)
