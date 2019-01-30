import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEditLocation } from './FilledEditLocation'
import { OutlineEditLocation } from './OutlineEditLocation'
import { RoundEditLocation } from './RoundEditLocation'
import { SharpEditLocation } from './SharpEditLocation'
import { TwoToneEditLocation } from './TwoToneEditLocation'

export const EditLocation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEditLocation, OutlineEditLocation, RoundEditLocation, SharpEditLocation, TwoToneEditLocation)
