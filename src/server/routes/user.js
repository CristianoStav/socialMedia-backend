import UserController from '../controllers/UserController';

const router = require('express').Router();

const userController = new UserController();

router.post('/login', userController.login);
router.post('/singIn', userController.singIn);
router.patch('/changeProfilePhoto', userController.changeProfilePhoto);

module.exports = router;
