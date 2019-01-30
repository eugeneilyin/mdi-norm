import { createThemedIcon } from './utils/createThemedIcon'
import { FilledApps } from './FilledApps'
import { OutlineApps } from './OutlineApps'
import { RoundApps } from './RoundApps'
import { SharpApps } from './SharpApps'
import { TwoToneApps } from './TwoToneApps'

export const Apps = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledApps, OutlineApps, RoundApps, SharpApps, TwoToneApps)
