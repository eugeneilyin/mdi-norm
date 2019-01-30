import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRouter } from './FilledRouter'
import { OutlineRouter } from './OutlineRouter'
import { RoundRouter } from './RoundRouter'
import { SharpRouter } from './SharpRouter'
import { TwoToneRouter } from './TwoToneRouter'

export const Router = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRouter, OutlineRouter, RoundRouter, SharpRouter, TwoToneRouter)
