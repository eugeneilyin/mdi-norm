import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCategory } from './FilledCategory'
import { OutlineCategory } from './OutlineCategory'
import { RoundCategory } from './RoundCategory'
import { SharpCategory } from './SharpCategory'
import { TwoToneCategory } from './TwoToneCategory'

export const Category = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCategory, OutlineCategory, RoundCategory, SharpCategory, TwoToneCategory)
