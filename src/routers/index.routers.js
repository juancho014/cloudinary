const {Router}=require('express');
const router= Router();
const{renderIndex,
      postIndex,
      renderImage,
      imgDelete
      }=require('../controllers/index.controlers');



router.get('/',renderIndex);

router.get('/image/:_id',renderImage);


router.get('/image/delete/:_id',imgDelete);

router.post('/images/add',postIndex);


module.exports= router;