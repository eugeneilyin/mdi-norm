import { createThemedIcon } from './utils/createThemedIcon'
import { FilledViewDay } from './FilledViewDay'
import { OutlineViewDay } from './OutlineViewDay'
import { RoundViewDay } from './RoundViewDay'
import { SharpViewDay } from './SharpViewDay'
import { TwoToneViewDay } from './TwoToneViewDay'

export const ViewDay = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledViewDay, OutlineViewDay, RoundViewDay, SharpViewDay, TwoToneViewDay)
