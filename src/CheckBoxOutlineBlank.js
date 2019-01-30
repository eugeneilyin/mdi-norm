import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCheckBoxOutlineBlank } from './FilledCheckBoxOutlineBlank'
import { OutlineCheckBoxOutlineBlank } from './OutlineCheckBoxOutlineBlank'
import { RoundCheckBoxOutlineBlank } from './RoundCheckBoxOutlineBlank'
import { SharpCheckBoxOutlineBlank } from './SharpCheckBoxOutlineBlank'
import { TwoToneCheckBoxOutlineBlank } from './TwoToneCheckBoxOutlineBlank'

export const CheckBoxOutlineBlank = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCheckBoxOutlineBlank, OutlineCheckBoxOutlineBlank, RoundCheckBoxOutlineBlank, SharpCheckBoxOutlineBlank, TwoToneCheckBoxOutlineBlank)
