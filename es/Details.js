import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDetails } from './FilledDetails';
import { OutlineDetails } from './OutlineDetails';
import { RoundDetails } from './RoundDetails';
import { SharpDetails } from './SharpDetails';
import { TwoToneDetails } from './TwoToneDetails';
export var Details =
/*#__PURE__*/
function Details(props) {
  return createThemedIcon(props, FilledDetails, OutlineDetails, RoundDetails, SharpDetails, TwoToneDetails);
};