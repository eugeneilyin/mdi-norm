import { createThemedIcon } from './utils/createThemedIcon';
import { IconCategoryFilled } from './IconCategoryFilled';
import { IconCategoryOutlined } from './IconCategoryOutlined';
import { IconCategoryRounded } from './IconCategoryRounded';
import { IconCategorySharp } from './IconCategorySharp';
import { IconCategoryTwoTone } from './IconCategoryTwoTone';
export var IconCategory =
/*#__PURE__*/
function IconCategory(props) {
  return createThemedIcon(props, IconCategoryFilled, IconCategoryOutlined, IconCategoryRounded, IconCategorySharp, IconCategoryTwoTone);
};