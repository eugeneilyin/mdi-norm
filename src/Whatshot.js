import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWhatshot } from './FilledWhatshot'
import { OutlineWhatshot } from './OutlineWhatshot'
import { RoundWhatshot } from './RoundWhatshot'
import { SharpWhatshot } from './SharpWhatshot'
import { TwoToneWhatshot } from './TwoToneWhatshot'

export const Whatshot = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWhatshot, OutlineWhatshot, RoundWhatshot, SharpWhatshot, TwoToneWhatshot)
