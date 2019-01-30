import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGridOn } from './FilledGridOn'
import { OutlineGridOn } from './OutlineGridOn'
import { RoundGridOn } from './RoundGridOn'
import { SharpGridOn } from './SharpGridOn'
import { TwoToneGridOn } from './TwoToneGridOn'

export const GridOn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGridOn, OutlineGridOn, RoundGridOn, SharpGridOn, TwoToneGridOn)
