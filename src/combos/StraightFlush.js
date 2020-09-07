import Combo from '../Combo.js';
import Flush from './Flush.js';
import Straight from './Straight.js';

class StraightFlush extends Combo {
  static isAvailable(cards) {
    return Straight.isAvailable(cards) && Flush.isAvailable(cards)
  }
}

export default StraightFlush;