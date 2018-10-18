import config from "../config/app";
import ApiRoutes from './api';

const RouterInstance = require('restify-router').Router;
const router = new RouterInstance();


//url to check server status

router.get("/" , (req , res) => {
    res.json({
        name: config.app_name,
        status: "Active",
        env: config.app_env
    })
});

/**
 * Register all router you have been created
 */

router.add("/user" , ApiRoutes);

export default router;