import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFirstPage } from './FilledFirstPage'
import { OutlineFirstPage } from './OutlineFirstPage'
import { RoundFirstPage } from './RoundFirstPage'
import { SharpFirstPage } from './SharpFirstPage'
import { TwoToneFirstPage } from './TwoToneFirstPage'

export const FirstPage = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFirstPage, OutlineFirstPage, RoundFirstPage, SharpFirstPage, TwoToneFirstPage)
