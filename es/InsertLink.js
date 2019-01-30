import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInsertLink } from './FilledInsertLink';
import { OutlineInsertLink } from './OutlineInsertLink';
import { RoundInsertLink } from './RoundInsertLink';
import { SharpInsertLink } from './SharpInsertLink';
import { TwoToneInsertLink } from './TwoToneInsertLink';
export var InsertLink =
/*#__PURE__*/
function InsertLink(props) {
  return createThemedIcon(props, FilledInsertLink, OutlineInsertLink, RoundInsertLink, SharpInsertLink, TwoToneInsertLink);
};