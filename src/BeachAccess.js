import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBeachAccess } from './FilledBeachAccess'
import { OutlineBeachAccess } from './OutlineBeachAccess'
import { RoundBeachAccess } from './RoundBeachAccess'
import { SharpBeachAccess } from './SharpBeachAccess'
import { TwoToneBeachAccess } from './TwoToneBeachAccess'

export const BeachAccess = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBeachAccess, OutlineBeachAccess, RoundBeachAccess, SharpBeachAccess, TwoToneBeachAccess)
