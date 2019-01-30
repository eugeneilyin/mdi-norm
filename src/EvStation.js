import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEvStation } from './FilledEvStation'
import { OutlineEvStation } from './OutlineEvStation'
import { RoundEvStation } from './RoundEvStation'
import { SharpEvStation } from './SharpEvStation'
import { TwoToneEvStation } from './TwoToneEvStation'

export const EvStation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEvStation, OutlineEvStation, RoundEvStation, SharpEvStation, TwoToneEvStation)
