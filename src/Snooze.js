import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSnooze } from './FilledSnooze'
import { OutlineSnooze } from './OutlineSnooze'
import { RoundSnooze } from './RoundSnooze'
import { SharpSnooze } from './SharpSnooze'
import { TwoToneSnooze } from './TwoToneSnooze'

export const Snooze = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSnooze, OutlineSnooze, RoundSnooze, SharpSnooze, TwoToneSnooze)
