import express from 'express';
import {createJob} from '../controller/jobs.controller.js'

const router = express.Router()


router.post('/jobs', createJob)

export default router;