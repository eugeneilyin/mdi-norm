import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTabletMac } from './FilledTabletMac'
import { OutlineTabletMac } from './OutlineTabletMac'
import { RoundTabletMac } from './RoundTabletMac'
import { SharpTabletMac } from './SharpTabletMac'
import { TwoToneTabletMac } from './TwoToneTabletMac'

export const TabletMac = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTabletMac, OutlineTabletMac, RoundTabletMac, SharpTabletMac, TwoToneTabletMac)
