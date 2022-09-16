import { Router } from "express";
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'

import { CreateMyClasseController } from './controllers/myclasse/CreateMyClasseController'
import { ListMyClasseController } from './controllers/myclasse/ListMyClasseController'

import { CreateClasseController } from './controllers/classe/CreateClasseController'
import { ListByMyClasseController } from './controllers/classe/ListByMyClasseController'

import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//-- ROTAS CLASSE --
router.post('/myclasses', isAuthenticated, upload.fields([{ name: 'teacherphoto', maxCount: 1 }, { name: 'image', maxCount: 1 }]), new CreateMyClasseController().handle)
router.get('/myclasses', isAuthenticated, new ListMyClasseController().handle)

router.post('/classes', isAuthenticated, upload.single('material'), new CreateClasseController().handle)
router.get('/myclasses/classes', isAuthenticated, new ListByMyClasseController().handle)

export { router };