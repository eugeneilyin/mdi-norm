import { createThemedIcon } from './utils/createThemedIcon';
import { IconSettingsCellFilled } from './IconSettingsCellFilled';
import { IconSettingsCellOutlined } from './IconSettingsCellOutlined';
import { IconSettingsCellRounded } from './IconSettingsCellRounded';
import { IconSettingsCellSharp } from './IconSettingsCellSharp';
import { IconSettingsCellTwoTone } from './IconSettingsCellTwoTone';
export var IconSettingsCell =
/*#__PURE__*/
function IconSettingsCell(props) {
  return createThemedIcon(props, IconSettingsCellFilled, IconSettingsCellOutlined, IconSettingsCellRounded, IconSettingsCellSharp, IconSettingsCellTwoTone);
};