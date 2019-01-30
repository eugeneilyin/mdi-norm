import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSync } from './FilledSync'
import { OutlineSync } from './OutlineSync'
import { RoundSync } from './RoundSync'
import { SharpSync } from './SharpSync'
import { TwoToneSync } from './TwoToneSync'

export const Sync = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSync, OutlineSync, RoundSync, SharpSync, TwoToneSync)
