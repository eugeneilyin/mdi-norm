import { createThemedIcon } from './utils/createThemedIcon'
import { FilledExtension } from './FilledExtension'
import { OutlineExtension } from './OutlineExtension'
import { RoundExtension } from './RoundExtension'
import { SharpExtension } from './SharpExtension'
import { TwoToneExtension } from './TwoToneExtension'

export const Extension = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledExtension, OutlineExtension, RoundExtension, SharpExtension, TwoToneExtension)
