import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFolder } from './FilledFolder'
import { OutlineFolder } from './OutlineFolder'
import { RoundFolder } from './RoundFolder'
import { SharpFolder } from './SharpFolder'
import { TwoToneFolder } from './TwoToneFolder'

export const Folder = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFolder, OutlineFolder, RoundFolder, SharpFolder, TwoToneFolder)
