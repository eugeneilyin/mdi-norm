import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFlare } from './FilledFlare'
import { OutlineFlare } from './OutlineFlare'
import { RoundFlare } from './RoundFlare'
import { SharpFlare } from './SharpFlare'
import { TwoToneFlare } from './TwoToneFlare'

export const Flare = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFlare, OutlineFlare, RoundFlare, SharpFlare, TwoToneFlare)
