import { Router } from 'express';
import QanswersController from '../controllers/QanswersC';

const router = new Router();

router.post('/', QanswersController.store);
router.get('/retrieveData', QanswersController.index);

export default router;

/*
index -> List the whole table
store/create -> create a new one
delete -> delete one
show -> shows only a specific one
update -> update
*/
