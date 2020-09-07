import Combo from '../Combo.js';
import '../../lib/gem/src/gemArray.js'

class Flush extends Combo {
  static isAvailable(cards) {
    let types = cards.map(card => card.type()).gemUniq()

    return types.length === 1
  }
}

export default Flush;