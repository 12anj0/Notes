import * as express from "express";
import { NoteStore as notes } from '../app.mjs'
export const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
      const keyList = await notes.keyList();
      const keyPromises = keyList.map( key => notes.read(key));
      const noteList = await Promise.all(keyPromises)

      res.render('index', { title: 'Notes' , noteList : noteList});

  } catch (err) {
    next(err);
  }
  
});

module.exports = router;
