import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFlipToFront } from './FilledFlipToFront'
import { OutlineFlipToFront } from './OutlineFlipToFront'
import { RoundFlipToFront } from './RoundFlipToFront'
import { SharpFlipToFront } from './SharpFlipToFront'
import { TwoToneFlipToFront } from './TwoToneFlipToFront'

export const FlipToFront = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFlipToFront, OutlineFlipToFront, RoundFlipToFront, SharpFlipToFront, TwoToneFlipToFront)
