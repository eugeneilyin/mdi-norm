import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAssistantPhoto } from './FilledAssistantPhoto';
import { OutlineAssistantPhoto } from './OutlineAssistantPhoto';
import { RoundAssistantPhoto } from './RoundAssistantPhoto';
import { SharpAssistantPhoto } from './SharpAssistantPhoto';
import { TwoToneAssistantPhoto } from './TwoToneAssistantPhoto';
export var AssistantPhoto =
/*#__PURE__*/
function AssistantPhoto(props) {
  return createThemedIcon(props, FilledAssistantPhoto, OutlineAssistantPhoto, RoundAssistantPhoto, SharpAssistantPhoto, TwoToneAssistantPhoto);
};