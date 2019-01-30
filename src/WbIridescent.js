import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWbIridescent } from './FilledWbIridescent'
import { OutlineWbIridescent } from './OutlineWbIridescent'
import { RoundWbIridescent } from './RoundWbIridescent'
import { SharpWbIridescent } from './SharpWbIridescent'
import { TwoToneWbIridescent } from './TwoToneWbIridescent'

export const WbIridescent = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWbIridescent, OutlineWbIridescent, RoundWbIridescent, SharpWbIridescent, TwoToneWbIridescent)
