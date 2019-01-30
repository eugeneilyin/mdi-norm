import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAcUnit } from './FilledAcUnit'
import { OutlineAcUnit } from './OutlineAcUnit'
import { RoundAcUnit } from './RoundAcUnit'
import { SharpAcUnit } from './SharpAcUnit'
import { TwoToneAcUnit } from './TwoToneAcUnit'

export const AcUnit = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAcUnit, OutlineAcUnit, RoundAcUnit, SharpAcUnit, TwoToneAcUnit)
