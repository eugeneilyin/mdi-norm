import { createThemedIcon } from './utils/createThemedIcon';
import { IconCollectionsFilled } from './IconCollectionsFilled';
import { IconCollectionsOutlined } from './IconCollectionsOutlined';
import { IconCollectionsRounded } from './IconCollectionsRounded';
import { IconCollectionsSharp } from './IconCollectionsSharp';
import { IconCollectionsTwoTone } from './IconCollectionsTwoTone';
export var IconCollections =
/*#__PURE__*/
function IconCollections(props) {
  return createThemedIcon(props, IconCollectionsFilled, IconCollectionsOutlined, IconCollectionsRounded, IconCollectionsSharp, IconCollectionsTwoTone);
};