import { Router } from 'express';
import userController from '../controllers/UserC';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);

export default router;

/*
index -> List the whole table
store/create -> create a new one
delete -> delete one
show -> shows only a specific one
update -> update
*/
