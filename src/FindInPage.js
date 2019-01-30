import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFindInPage } from './FilledFindInPage'
import { OutlineFindInPage } from './OutlineFindInPage'
import { RoundFindInPage } from './RoundFindInPage'
import { SharpFindInPage } from './SharpFindInPage'
import { TwoToneFindInPage } from './TwoToneFindInPage'

export const FindInPage = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFindInPage, OutlineFindInPage, RoundFindInPage, SharpFindInPage, TwoToneFindInPage)
