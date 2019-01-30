import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRefresh } from './FilledRefresh'
import { OutlineRefresh } from './OutlineRefresh'
import { RoundRefresh } from './RoundRefresh'
import { SharpRefresh } from './SharpRefresh'
import { TwoToneRefresh } from './TwoToneRefresh'

export const Refresh = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRefresh, OutlineRefresh, RoundRefresh, SharpRefresh, TwoToneRefresh)
