import express from 'express';
import {deleteUser, test} from '../controllers/useer.controller.js';
import { updateUser,getuserlistings } from '../controllers/useer.controller.js';
import { verifytoken } from '../utils/Verifyuser.js';

const router=express.Router();

router.get('/test',test);
router.post('/update/:id',verifytoken, updateUser);
router.delete('/delete/:id',verifytoken, deleteUser);
router.get('/listings/:id',verifytoken,getuserlistings);

export default router;