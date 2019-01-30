import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCastForEducation } from './FilledCastForEducation'
import { OutlineCastForEducation } from './OutlineCastForEducation'
import { RoundCastForEducation } from './RoundCastForEducation'
import { SharpCastForEducation } from './SharpCastForEducation'
import { TwoToneCastForEducation } from './TwoToneCastForEducation'

export const CastForEducation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCastForEducation, OutlineCastForEducation, RoundCastForEducation, SharpCastForEducation, TwoToneCastForEducation)
