import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNature } from './FilledNature'
import { OutlineNature } from './OutlineNature'
import { RoundNature } from './RoundNature'
import { SharpNature } from './SharpNature'
import { TwoToneNature } from './TwoToneNature'

export const Nature = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNature, OutlineNature, RoundNature, SharpNature, TwoToneNature)
