import { createThemedIcon } from './utils/createThemedIcon'
import { FilledZoomOut } from './FilledZoomOut'
import { OutlineZoomOut } from './OutlineZoomOut'
import { RoundZoomOut } from './RoundZoomOut'
import { SharpZoomOut } from './SharpZoomOut'
import { TwoToneZoomOut } from './TwoToneZoomOut'

export const ZoomOut = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledZoomOut, OutlineZoomOut, RoundZoomOut, SharpZoomOut, TwoToneZoomOut)
