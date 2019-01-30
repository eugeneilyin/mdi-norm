import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMoreHoriz } from './FilledMoreHoriz'
import { OutlineMoreHoriz } from './OutlineMoreHoriz'
import { RoundMoreHoriz } from './RoundMoreHoriz'
import { SharpMoreHoriz } from './SharpMoreHoriz'
import { TwoToneMoreHoriz } from './TwoToneMoreHoriz'

export const MoreHoriz = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMoreHoriz, OutlineMoreHoriz, RoundMoreHoriz, SharpMoreHoriz, TwoToneMoreHoriz)
