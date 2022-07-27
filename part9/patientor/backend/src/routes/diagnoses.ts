import express from 'express';
import diagnosisService from '../services/diagnosisService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnosisService.getData());
});

router.post('/', (_req, res) => {
  res.send(diagnosisService.addData());
});

export default router;
