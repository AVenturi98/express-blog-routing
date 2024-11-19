const express = require('express');
const router = express.Router();
const posts = require('../data/posts');

//index (get)
router.get('/', (req, res) => {
    res.send(`Lista dei post`)
});

//show (get)
router.get('/:slug', (req, res) => {

    const name = req.params.slug
    const post = posts.find((el) => el.slug === name)
    console.log(`Elemento del post: ${name}`)
    res.json(post)
});


//store (post)
router.post('/', (req, res) => {
    res.send('Creo un nuovo elemento del post')
});


//update (put)
router.put('/:slug', (req, res) => {

    const name = req.params.slug
    const post = posts.find((el) => el.slug === name)
    console.log(`Aggiorno l\'elemento del post: ${name}`)
    res.json(post)
});

//modify (patch)
router.patch('/:slug', (req, res) => {
    
    const name = req.params.slug
    const post = posts.find((el) => el.slug === name)
    console.log(`Modifico l\'elemento del post: ${name}`)
    res.json(post)
});

//destroy (delete)
router.delete('/:slug', (req, res) => {

    const name = req.params.slug
    const post = posts.find((el) => el.slug === name)
    console.log(`Cancella l\'elemento del post: ${name}`)
    res.json(post)
});

module.exports = router