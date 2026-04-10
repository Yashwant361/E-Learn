import express from 'express'
import { isAuth } from '../middleware/isAuth.js';
import { createCourse } from '../controllers/admin.js';
import { uploadFiles } from '../middleware/multer.js';
import { isAdmin } from '../middleware/isAuth.js';

const router = express.Router();

router.post('/course/new',
    isAuth,
    isAdmin,
    uploadFiles.single('file'),
    createCourse)

export default router



