const RouterInstance = require('restify-router').Router;
const router = new RouterInstance();


/**
 * Define route get of some users
 * this for example
 */

router.get("/" , (req , res) => {
    res.json({
        name: "Angger PW",
        site: "Node.js and PHP Backend Engineer"
    })
});

export default router;