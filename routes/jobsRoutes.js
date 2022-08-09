import express from 'express';
const router = express.Router();
import { createJob, getAllJobs, updateJob, deleteJob, showStats } from '../controllers/jobsController.js';

router.route('/').post(createJob).get(getAllJobs);
//remmeber about :id
router.route('/stats').get(showStats)
router.route('/:id').patch(updateJob).delete(deleteJob);


export default router;