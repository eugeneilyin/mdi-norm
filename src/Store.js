import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStore } from './FilledStore'
import { OutlineStore } from './OutlineStore'
import { RoundStore } from './RoundStore'
import { SharpStore } from './SharpStore'
import { TwoToneStore } from './TwoToneStore'

export const Store = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStore, OutlineStore, RoundStore, SharpStore, TwoToneStore)
