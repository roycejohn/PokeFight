const mongoose = require('mongoose');

const battleResultSchema = new mongoose.Schema({
  winner: String,
  timestamp: { type: Date, default: Date.now }
});

const BattleResult = mongoose.model('BattleResult', battleResultSchema);

module.exports = BattleResult;