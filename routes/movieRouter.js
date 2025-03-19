import express from 'express';

const router = express.Router();

import { index, show, destroy, storeReview } from '../controllers/movieController.js';

//Rotte per i film


router.get('/', index);


router.get('/:id', show);

router.delete('/:id', destroy);

router.post('/:id/reviews', storeReview)

export default router;