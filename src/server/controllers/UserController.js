/* eslint-disable class-methods-use-this */
import User from '../models/user';

export default class UserController {
  async login(req, res) {
    const { login, pass } = req.body;

    const user = await User.findOne({ email: login, senha: pass });

    if (user) {
      return res.json(user);
    }

    return res.status(404).end();
  }

  async singIn(req, res) {
    const { email, pass } = req.body;

    const registered = await User
      .create({
        email,
        nome: 'Cristiano',
        senha: pass,
      });

    if (registered) {
      return res.status(201).end();
    }

    return res.status(500).end();
  }

  async changeProfilePhoto(req, res) {
    const { _id, image } = req.body;

    const update = await User.findOneAndUpdate({ _id }, {
      $set: { perfilPhoto: image },
    }, {
      new: true,
      useFindAndModify: false,
    });

    if (update) {
      return res.status(200).json(update);
    }

    return res.status(500).end();
  }
}
