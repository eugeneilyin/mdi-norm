import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWbIncandescent } from './FilledWbIncandescent'
import { OutlineWbIncandescent } from './OutlineWbIncandescent'
import { RoundWbIncandescent } from './RoundWbIncandescent'
import { SharpWbIncandescent } from './SharpWbIncandescent'
import { TwoToneWbIncandescent } from './TwoToneWbIncandescent'

export const WbIncandescent = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWbIncandescent, OutlineWbIncandescent, RoundWbIncandescent, SharpWbIncandescent, TwoToneWbIncandescent)
