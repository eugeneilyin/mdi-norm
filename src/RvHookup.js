import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRvHookup } from './FilledRvHookup'
import { OutlineRvHookup } from './OutlineRvHookup'
import { RoundRvHookup } from './RoundRvHookup'
import { SharpRvHookup } from './SharpRvHookup'
import { TwoToneRvHookup } from './TwoToneRvHookup'

export const RvHookup = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRvHookup, OutlineRvHookup, RoundRvHookup, SharpRvHookup, TwoToneRvHookup)
