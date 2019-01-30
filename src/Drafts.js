import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDrafts } from './FilledDrafts'
import { OutlineDrafts } from './OutlineDrafts'
import { RoundDrafts } from './RoundDrafts'
import { SharpDrafts } from './SharpDrafts'
import { TwoToneDrafts } from './TwoToneDrafts'

export const Drafts = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDrafts, OutlineDrafts, RoundDrafts, SharpDrafts, TwoToneDrafts)
