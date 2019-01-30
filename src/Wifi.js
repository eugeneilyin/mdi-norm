import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWifi } from './FilledWifi'
import { OutlineWifi } from './OutlineWifi'
import { RoundWifi } from './RoundWifi'
import { SharpWifi } from './SharpWifi'
import { TwoToneWifi } from './TwoToneWifi'

export const Wifi = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWifi, OutlineWifi, RoundWifi, SharpWifi, TwoToneWifi)
