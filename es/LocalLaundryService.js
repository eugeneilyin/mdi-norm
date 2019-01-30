import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalLaundryService } from './FilledLocalLaundryService';
import { OutlineLocalLaundryService } from './OutlineLocalLaundryService';
import { RoundLocalLaundryService } from './RoundLocalLaundryService';
import { SharpLocalLaundryService } from './SharpLocalLaundryService';
import { TwoToneLocalLaundryService } from './TwoToneLocalLaundryService';
export var LocalLaundryService =
/*#__PURE__*/
function LocalLaundryService(props) {
  return createThemedIcon(props, FilledLocalLaundryService, OutlineLocalLaundryService, RoundLocalLaundryService, SharpLocalLaundryService, TwoToneLocalLaundryService);
};