import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSearch } from './FilledSearch';
import { OutlineSearch } from './OutlineSearch';
import { RoundSearch } from './RoundSearch';
import { SharpSearch } from './SharpSearch';
import { TwoToneSearch } from './TwoToneSearch';
export var Search =
/*#__PURE__*/
function Search(props) {
  return createThemedIcon(props, FilledSearch, OutlineSearch, RoundSearch, SharpSearch, TwoToneSearch);
};