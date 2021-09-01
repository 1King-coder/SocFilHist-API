import { Router } from 'express';
import tokenController from '../controllers/TokenC';

const router = new Router();

router.post('/', tokenController.store);

/*
index -> List the whole table
store/create -> create a new one
delete -> delete one
show -> shows only a specific one
update -> update
*/

export default router;
