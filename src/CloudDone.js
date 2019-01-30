import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCloudDone } from './FilledCloudDone'
import { OutlineCloudDone } from './OutlineCloudDone'
import { RoundCloudDone } from './RoundCloudDone'
import { SharpCloudDone } from './SharpCloudDone'
import { TwoToneCloudDone } from './TwoToneCloudDone'

export const CloudDone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCloudDone, OutlineCloudDone, RoundCloudDone, SharpCloudDone, TwoToneCloudDone)
