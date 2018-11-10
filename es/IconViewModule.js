import { createThemedIcon } from './utils/createThemedIcon';
import { IconViewModuleFilled } from './IconViewModuleFilled';
import { IconViewModuleOutlined } from './IconViewModuleOutlined';
import { IconViewModuleRounded } from './IconViewModuleRounded';
import { IconViewModuleSharp } from './IconViewModuleSharp';
import { IconViewModuleTwoTone } from './IconViewModuleTwoTone';
export var IconViewModule =
/*#__PURE__*/
function IconViewModule(props) {
  return createThemedIcon(props, IconViewModuleFilled, IconViewModuleOutlined, IconViewModuleRounded, IconViewModuleSharp, IconViewModuleTwoTone);
};