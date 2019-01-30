import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSubject } from './FilledSubject';
import { OutlineSubject } from './OutlineSubject';
import { RoundSubject } from './RoundSubject';
import { SharpSubject } from './SharpSubject';
import { TwoToneSubject } from './TwoToneSubject';
export var Subject =
/*#__PURE__*/
function Subject(props) {
  return createThemedIcon(props, FilledSubject, OutlineSubject, RoundSubject, SharpSubject, TwoToneSubject);
};