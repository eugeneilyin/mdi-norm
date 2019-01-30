import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalPostOffice } from './FilledLocalPostOffice';
import { OutlineLocalPostOffice } from './OutlineLocalPostOffice';
import { RoundLocalPostOffice } from './RoundLocalPostOffice';
import { SharpLocalPostOffice } from './SharpLocalPostOffice';
import { TwoToneLocalPostOffice } from './TwoToneLocalPostOffice';
export var LocalPostOffice =
/*#__PURE__*/
function LocalPostOffice(props) {
  return createThemedIcon(props, FilledLocalPostOffice, OutlineLocalPostOffice, RoundLocalPostOffice, SharpLocalPostOffice, TwoToneLocalPostOffice);
};