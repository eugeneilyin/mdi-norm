import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBook } from './FilledBook';
import { OutlineBook } from './OutlineBook';
import { RoundBook } from './RoundBook';
import { SharpBook } from './SharpBook';
import { TwoToneBook } from './TwoToneBook';
export var Book =
/*#__PURE__*/
function Book(props) {
  return createThemedIcon(props, FilledBook, OutlineBook, RoundBook, SharpBook, TwoToneBook);
};