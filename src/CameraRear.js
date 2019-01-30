import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCameraRear } from './FilledCameraRear'
import { OutlineCameraRear } from './OutlineCameraRear'
import { RoundCameraRear } from './RoundCameraRear'
import { SharpCameraRear } from './SharpCameraRear'
import { TwoToneCameraRear } from './TwoToneCameraRear'

export const CameraRear = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCameraRear, OutlineCameraRear, RoundCameraRear, SharpCameraRear, TwoToneCameraRear)
