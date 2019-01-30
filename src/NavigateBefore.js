import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNavigateBefore } from './FilledNavigateBefore'
import { OutlineNavigateBefore } from './OutlineNavigateBefore'
import { RoundNavigateBefore } from './RoundNavigateBefore'
import { SharpNavigateBefore } from './SharpNavigateBefore'
import { TwoToneNavigateBefore } from './TwoToneNavigateBefore'

export const NavigateBefore = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNavigateBefore, OutlineNavigateBefore, RoundNavigateBefore, SharpNavigateBefore, TwoToneNavigateBefore)
