import { createThemedIcon } from './utils/createThemedIcon'
import { FilledChromeReaderMode } from './FilledChromeReaderMode'
import { OutlineChromeReaderMode } from './OutlineChromeReaderMode'
import { RoundChromeReaderMode } from './RoundChromeReaderMode'
import { SharpChromeReaderMode } from './SharpChromeReaderMode'
import { TwoToneChromeReaderMode } from './TwoToneChromeReaderMode'

export const ChromeReaderMode = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledChromeReaderMode, OutlineChromeReaderMode, RoundChromeReaderMode, SharpChromeReaderMode, TwoToneChromeReaderMode)
