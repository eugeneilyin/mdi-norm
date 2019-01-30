import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAddBox } from './FilledAddBox'
import { OutlineAddBox } from './OutlineAddBox'
import { RoundAddBox } from './RoundAddBox'
import { SharpAddBox } from './SharpAddBox'
import { TwoToneAddBox } from './TwoToneAddBox'

export const AddBox = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAddBox, OutlineAddBox, RoundAddBox, SharpAddBox, TwoToneAddBox)
