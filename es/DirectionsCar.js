import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDirectionsCar } from './FilledDirectionsCar';
import { OutlineDirectionsCar } from './OutlineDirectionsCar';
import { RoundDirectionsCar } from './RoundDirectionsCar';
import { SharpDirectionsCar } from './SharpDirectionsCar';
import { TwoToneDirectionsCar } from './TwoToneDirectionsCar';
export var DirectionsCar =
/*#__PURE__*/
function DirectionsCar(props) {
  return createThemedIcon(props, FilledDirectionsCar, OutlineDirectionsCar, RoundDirectionsCar, SharpDirectionsCar, TwoToneDirectionsCar);
};