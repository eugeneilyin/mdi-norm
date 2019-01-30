import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCloudCircle } from './FilledCloudCircle'
import { OutlineCloudCircle } from './OutlineCloudCircle'
import { RoundCloudCircle } from './RoundCloudCircle'
import { SharpCloudCircle } from './SharpCloudCircle'
import { TwoToneCloudCircle } from './TwoToneCloudCircle'

export const CloudCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCloudCircle, OutlineCloudCircle, RoundCloudCircle, SharpCloudCircle, TwoToneCloudCircle)
