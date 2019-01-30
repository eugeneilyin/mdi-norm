import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCameraEnhance } from './FilledCameraEnhance'
import { OutlineCameraEnhance } from './OutlineCameraEnhance'
import { RoundCameraEnhance } from './RoundCameraEnhance'
import { SharpCameraEnhance } from './SharpCameraEnhance'
import { TwoToneCameraEnhance } from './TwoToneCameraEnhance'

export const CameraEnhance = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCameraEnhance, OutlineCameraEnhance, RoundCameraEnhance, SharpCameraEnhance, TwoToneCameraEnhance)
