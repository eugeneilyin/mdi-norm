import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCameraFront } from './FilledCameraFront'
import { OutlineCameraFront } from './OutlineCameraFront'
import { RoundCameraFront } from './RoundCameraFront'
import { SharpCameraFront } from './SharpCameraFront'
import { TwoToneCameraFront } from './TwoToneCameraFront'

export const CameraFront = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCameraFront, OutlineCameraFront, RoundCameraFront, SharpCameraFront, TwoToneCameraFront)
