import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWatch } from './FilledWatch'
import { OutlineWatch } from './OutlineWatch'
import { RoundWatch } from './RoundWatch'
import { SharpWatch } from './SharpWatch'
import { TwoToneWatch } from './TwoToneWatch'

export const Watch = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWatch, OutlineWatch, RoundWatch, SharpWatch, TwoToneWatch)
