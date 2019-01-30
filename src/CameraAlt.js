import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCameraAlt } from './FilledCameraAlt'
import { OutlineCameraAlt } from './OutlineCameraAlt'
import { RoundCameraAlt } from './RoundCameraAlt'
import { SharpCameraAlt } from './SharpCameraAlt'
import { TwoToneCameraAlt } from './TwoToneCameraAlt'

export const CameraAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCameraAlt, OutlineCameraAlt, RoundCameraAlt, SharpCameraAlt, TwoToneCameraAlt)
