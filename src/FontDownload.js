import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFontDownload } from './FilledFontDownload'
import { OutlineFontDownload } from './OutlineFontDownload'
import { RoundFontDownload } from './RoundFontDownload'
import { SharpFontDownload } from './SharpFontDownload'
import { TwoToneFontDownload } from './TwoToneFontDownload'

export const FontDownload = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFontDownload, OutlineFontDownload, RoundFontDownload, SharpFontDownload, TwoToneFontDownload)
