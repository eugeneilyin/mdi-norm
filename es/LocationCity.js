import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocationCity } from './FilledLocationCity';
import { OutlineLocationCity } from './OutlineLocationCity';
import { RoundLocationCity } from './RoundLocationCity';
import { SharpLocationCity } from './SharpLocationCity';
import { TwoToneLocationCity } from './TwoToneLocationCity';
export var LocationCity =
/*#__PURE__*/
function LocationCity(props) {
  return createThemedIcon(props, FilledLocationCity, OutlineLocationCity, RoundLocationCity, SharpLocationCity, TwoToneLocationCity);
};