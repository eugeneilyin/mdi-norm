import { createThemedIcon } from './utils/createThemedIcon';
import { IconWidgetsFilled } from './IconWidgetsFilled';
import { IconWidgetsOutlined } from './IconWidgetsOutlined';
import { IconWidgetsRounded } from './IconWidgetsRounded';
import { IconWidgetsSharp } from './IconWidgetsSharp';
import { IconWidgetsTwoTone } from './IconWidgetsTwoTone';
export var IconWidgets =
/*#__PURE__*/
function IconWidgets(props) {
  return createThemedIcon(props, IconWidgetsFilled, IconWidgetsOutlined, IconWidgetsRounded, IconWidgetsSharp, IconWidgetsTwoTone);
};