import { createThemedIcon } from './utils/createThemedIcon'
import { FilledOpenInBrowser } from './FilledOpenInBrowser'
import { OutlineOpenInBrowser } from './OutlineOpenInBrowser'
import { RoundOpenInBrowser } from './RoundOpenInBrowser'
import { SharpOpenInBrowser } from './SharpOpenInBrowser'
import { TwoToneOpenInBrowser } from './TwoToneOpenInBrowser'

export const OpenInBrowser = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledOpenInBrowser, OutlineOpenInBrowser, RoundOpenInBrowser, SharpOpenInBrowser, TwoToneOpenInBrowser)
