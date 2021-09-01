import { Router } from 'express';

import studentController from '../controllers/StudentC';
import loginRequired from '../middlewares/loginRequired';
import admRequired from '../middlewares/admRequired';

const router = new Router();

router.get('/', studentController.index);
router.get('/:id', studentController.show);
router.post('/', studentController.store);
router.put('/:id', loginRequired, studentController.update);
router.delete('/:id', loginRequired, admRequired, studentController.delete);

/*
index -> List the whole table
store/create -> create a new one
delete -> delete one
show -> shows only a specific one
update -> update
*/

export default router;
