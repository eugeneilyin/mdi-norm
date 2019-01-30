import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNotInterested } from './FilledNotInterested'
import { OutlineNotInterested } from './OutlineNotInterested'
import { RoundNotInterested } from './RoundNotInterested'
import { SharpNotInterested } from './SharpNotInterested'
import { TwoToneNotInterested } from './TwoToneNotInterested'

export const NotInterested = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNotInterested, OutlineNotInterested, RoundNotInterested, SharpNotInterested, TwoToneNotInterested)
