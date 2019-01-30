import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCompassCalibration } from './FilledCompassCalibration'
import { OutlineCompassCalibration } from './OutlineCompassCalibration'
import { RoundCompassCalibration } from './RoundCompassCalibration'
import { SharpCompassCalibration } from './SharpCompassCalibration'
import { TwoToneCompassCalibration } from './TwoToneCompassCalibration'

export const CompassCalibration = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCompassCalibration, OutlineCompassCalibration, RoundCompassCalibration, SharpCompassCalibration, TwoToneCompassCalibration)
