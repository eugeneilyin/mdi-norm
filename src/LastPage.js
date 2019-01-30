import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLastPage } from './FilledLastPage'
import { OutlineLastPage } from './OutlineLastPage'
import { RoundLastPage } from './RoundLastPage'
import { SharpLastPage } from './SharpLastPage'
import { TwoToneLastPage } from './TwoToneLastPage'

export const LastPage = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLastPage, OutlineLastPage, RoundLastPage, SharpLastPage, TwoToneLastPage)
