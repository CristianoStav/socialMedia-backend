import mongoose from 'mongoose';

const User = mongoose.Schema({
  email: String,
  nome: String,
  senha: String,
  perfilPhoto: String,
}, {
  timestamp: true,
});

module.exports = mongoose.model('User', User);
