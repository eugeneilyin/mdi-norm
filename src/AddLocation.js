import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAddLocation } from './FilledAddLocation'
import { OutlineAddLocation } from './OutlineAddLocation'
import { RoundAddLocation } from './RoundAddLocation'
import { SharpAddLocation } from './SharpAddLocation'
import { TwoToneAddLocation } from './TwoToneAddLocation'

export const AddLocation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAddLocation, OutlineAddLocation, RoundAddLocation, SharpAddLocation, TwoToneAddLocation)
