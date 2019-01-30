import { createThemedIcon } from './utils/createThemedIcon'
import { FilledUnfoldLess } from './FilledUnfoldLess'
import { OutlineUnfoldLess } from './OutlineUnfoldLess'
import { RoundUnfoldLess } from './RoundUnfoldLess'
import { SharpUnfoldLess } from './SharpUnfoldLess'
import { TwoToneUnfoldLess } from './TwoToneUnfoldLess'

export const UnfoldLess = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledUnfoldLess, OutlineUnfoldLess, RoundUnfoldLess, SharpUnfoldLess, TwoToneUnfoldLess)
