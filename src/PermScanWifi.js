import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPermScanWifi } from './FilledPermScanWifi'
import { OutlinePermScanWifi } from './OutlinePermScanWifi'
import { RoundPermScanWifi } from './RoundPermScanWifi'
import { SharpPermScanWifi } from './SharpPermScanWifi'
import { TwoTonePermScanWifi } from './TwoTonePermScanWifi'

export const PermScanWifi = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPermScanWifi, OutlinePermScanWifi, RoundPermScanWifi, SharpPermScanWifi, TwoTonePermScanWifi)
