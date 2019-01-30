import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCode } from './FilledCode'
import { OutlineCode } from './OutlineCode'
import { RoundCode } from './RoundCode'
import { SharpCode } from './SharpCode'
import { TwoToneCode } from './TwoToneCode'

export const Code = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCode, OutlineCode, RoundCode, SharpCode, TwoToneCode)
