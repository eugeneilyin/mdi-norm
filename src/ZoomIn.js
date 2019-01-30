import { createThemedIcon } from './utils/createThemedIcon'
import { FilledZoomIn } from './FilledZoomIn'
import { OutlineZoomIn } from './OutlineZoomIn'
import { RoundZoomIn } from './RoundZoomIn'
import { SharpZoomIn } from './SharpZoomIn'
import { TwoToneZoomIn } from './TwoToneZoomIn'

export const ZoomIn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledZoomIn, OutlineZoomIn, RoundZoomIn, SharpZoomIn, TwoToneZoomIn)
