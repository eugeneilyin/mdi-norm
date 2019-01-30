import { createThemedIcon } from './utils/createThemedIcon'
import { FilledClose } from './FilledClose'
import { OutlineClose } from './OutlineClose'
import { RoundClose } from './RoundClose'
import { SharpClose } from './SharpClose'
import { TwoToneClose } from './TwoToneClose'

export const Close = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledClose, OutlineClose, RoundClose, SharpClose, TwoToneClose)
