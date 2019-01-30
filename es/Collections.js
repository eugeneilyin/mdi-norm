import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCollections } from './FilledCollections';
import { OutlineCollections } from './OutlineCollections';
import { RoundCollections } from './RoundCollections';
import { SharpCollections } from './SharpCollections';
import { TwoToneCollections } from './TwoToneCollections';
export var Collections =
/*#__PURE__*/
function Collections(props) {
  return createThemedIcon(props, FilledCollections, OutlineCollections, RoundCollections, SharpCollections, TwoToneCollections);
};