import { createThemedIcon } from './utils/createThemedIcon'
import { FilledUnfoldMore } from './FilledUnfoldMore'
import { OutlineUnfoldMore } from './OutlineUnfoldMore'
import { RoundUnfoldMore } from './RoundUnfoldMore'
import { SharpUnfoldMore } from './SharpUnfoldMore'
import { TwoToneUnfoldMore } from './TwoToneUnfoldMore'

export const UnfoldMore = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledUnfoldMore, OutlineUnfoldMore, RoundUnfoldMore, SharpUnfoldMore, TwoToneUnfoldMore)
