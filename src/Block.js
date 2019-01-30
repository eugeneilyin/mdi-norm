import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBlock } from './FilledBlock'
import { OutlineBlock } from './OutlineBlock'
import { RoundBlock } from './RoundBlock'
import { SharpBlock } from './SharpBlock'
import { TwoToneBlock } from './TwoToneBlock'

export const Block = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBlock, OutlineBlock, RoundBlock, SharpBlock, TwoToneBlock)
