import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFindReplace } from './FilledFindReplace'
import { OutlineFindReplace } from './OutlineFindReplace'
import { RoundFindReplace } from './RoundFindReplace'
import { SharpFindReplace } from './SharpFindReplace'
import { TwoToneFindReplace } from './TwoToneFindReplace'

export const FindReplace = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFindReplace, OutlineFindReplace, RoundFindReplace, SharpFindReplace, TwoToneFindReplace)
