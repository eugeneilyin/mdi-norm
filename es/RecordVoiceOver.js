import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRecordVoiceOver } from './FilledRecordVoiceOver';
import { OutlineRecordVoiceOver } from './OutlineRecordVoiceOver';
import { RoundRecordVoiceOver } from './RoundRecordVoiceOver';
import { SharpRecordVoiceOver } from './SharpRecordVoiceOver';
import { TwoToneRecordVoiceOver } from './TwoToneRecordVoiceOver';
export var RecordVoiceOver =
/*#__PURE__*/
function RecordVoiceOver(props) {
  return createThemedIcon(props, FilledRecordVoiceOver, OutlineRecordVoiceOver, RoundRecordVoiceOver, SharpRecordVoiceOver, TwoToneRecordVoiceOver);
};