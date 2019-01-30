import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRecordVoiceOver } from './FilledRecordVoiceOver'
import { OutlineRecordVoiceOver } from './OutlineRecordVoiceOver'
import { RoundRecordVoiceOver } from './RoundRecordVoiceOver'
import { SharpRecordVoiceOver } from './SharpRecordVoiceOver'
import { TwoToneRecordVoiceOver } from './TwoToneRecordVoiceOver'

export const RecordVoiceOver = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRecordVoiceOver, OutlineRecordVoiceOver, RoundRecordVoiceOver, SharpRecordVoiceOver, TwoToneRecordVoiceOver)
