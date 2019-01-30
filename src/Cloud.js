import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCloud } from './FilledCloud'
import { OutlineCloud } from './OutlineCloud'
import { RoundCloud } from './RoundCloud'
import { SharpCloud } from './SharpCloud'
import { TwoToneCloud } from './TwoToneCloud'

export const Cloud = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCloud, OutlineCloud, RoundCloud, SharpCloud, TwoToneCloud)
