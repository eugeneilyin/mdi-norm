import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMoreVert } from './FilledMoreVert'
import { OutlineMoreVert } from './OutlineMoreVert'
import { RoundMoreVert } from './RoundMoreVert'
import { SharpMoreVert } from './SharpMoreVert'
import { TwoToneMoreVert } from './TwoToneMoreVert'

export const MoreVert = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMoreVert, OutlineMoreVert, RoundMoreVert, SharpMoreVert, TwoToneMoreVert)
