import { createThemedIcon } from './utils/createThemedIcon'
import { FilledOpenWith } from './FilledOpenWith'
import { OutlineOpenWith } from './OutlineOpenWith'
import { RoundOpenWith } from './RoundOpenWith'
import { SharpOpenWith } from './SharpOpenWith'
import { TwoToneOpenWith } from './TwoToneOpenWith'

export const OpenWith = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledOpenWith, OutlineOpenWith, RoundOpenWith, SharpOpenWith, TwoToneOpenWith)
