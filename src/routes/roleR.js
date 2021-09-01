import { Router } from 'express';
import rolesController from '../controllers/RolesC';

import loginRequired from '../middlewares/loginRequired';
import admRequired from '../middlewares/admRequired';

const router = new Router();

router.post('/', loginRequired, rolesController.store);
router.put('/:option/:id', loginRequired, admRequired, rolesController.update);

/*
index -> List the whole table
store/create -> create a new one
delete -> delete one
show -> shows only a specific one
update -> update
*/

export default router;
