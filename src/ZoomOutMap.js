import { createThemedIcon } from './utils/createThemedIcon'
import { FilledZoomOutMap } from './FilledZoomOutMap'
import { OutlineZoomOutMap } from './OutlineZoomOutMap'
import { RoundZoomOutMap } from './RoundZoomOutMap'
import { SharpZoomOutMap } from './SharpZoomOutMap'
import { TwoToneZoomOutMap } from './TwoToneZoomOutMap'

export const ZoomOutMap = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledZoomOutMap, OutlineZoomOutMap, RoundZoomOutMap, SharpZoomOutMap, TwoToneZoomOutMap)
