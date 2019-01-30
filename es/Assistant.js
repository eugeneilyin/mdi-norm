import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAssistant } from './FilledAssistant';
import { OutlineAssistant } from './OutlineAssistant';
import { RoundAssistant } from './RoundAssistant';
import { SharpAssistant } from './SharpAssistant';
import { TwoToneAssistant } from './TwoToneAssistant';
export var Assistant =
/*#__PURE__*/
function Assistant(props) {
  return createThemedIcon(props, FilledAssistant, OutlineAssistant, RoundAssistant, SharpAssistant, TwoToneAssistant);
};