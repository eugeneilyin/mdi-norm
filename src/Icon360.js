import { createThemedIcon } from './utils/createThemedIcon'
import { Filled360 } from './Filled360'
import { Outline360 } from './Outline360'
import { Round360 } from './Round360'
import { Sharp360 } from './Sharp360'
import { TwoTone360 } from './TwoTone360'

export const Icon360 = /*#__PURE__*/ props =>
  createThemedIcon(props, Filled360, Outline360, Round360, Sharp360, TwoTone360)
