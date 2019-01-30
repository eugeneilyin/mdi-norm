import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNavigateNext } from './FilledNavigateNext'
import { OutlineNavigateNext } from './OutlineNavigateNext'
import { RoundNavigateNext } from './RoundNavigateNext'
import { SharpNavigateNext } from './SharpNavigateNext'
import { TwoToneNavigateNext } from './TwoToneNavigateNext'

export const NavigateNext = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNavigateNext, OutlineNavigateNext, RoundNavigateNext, SharpNavigateNext, TwoToneNavigateNext)
