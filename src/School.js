import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSchool } from './FilledSchool'
import { OutlineSchool } from './OutlineSchool'
import { RoundSchool } from './RoundSchool'
import { SharpSchool } from './SharpSchool'
import { TwoToneSchool } from './TwoToneSchool'

export const School = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSchool, OutlineSchool, RoundSchool, SharpSchool, TwoToneSchool)
