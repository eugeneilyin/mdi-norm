import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCloudQueue } from './FilledCloudQueue'
import { OutlineCloudQueue } from './OutlineCloudQueue'
import { RoundCloudQueue } from './RoundCloudQueue'
import { SharpCloudQueue } from './SharpCloudQueue'
import { TwoToneCloudQueue } from './TwoToneCloudQueue'

export const CloudQueue = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCloudQueue, OutlineCloudQueue, RoundCloudQueue, SharpCloudQueue, TwoToneCloudQueue)
