import { Router } from 'express';

import userRoutes from './userRoutes';
import patientRoutes from './patientRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/patients',patientRoutes);

export default router;
