import { createThemedIcon } from './utils/createThemedIcon'
import { FilledToc } from './FilledToc'
import { OutlineToc } from './OutlineToc'
import { RoundToc } from './RoundToc'
import { SharpToc } from './SharpToc'
import { TwoToneToc } from './TwoToneToc'

export const Toc = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledToc, OutlineToc, RoundToc, SharpToc, TwoToneToc)
