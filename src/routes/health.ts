import { Router, Request, Response, NextFunction } from 'express';

export class Health {
    router: Router

    /**
    * Initialize the Health router
    */
    constructor() {
        this.router = Router();
        this.init();
    }

    public getCheck(req: Request, res: Response, next: NextFunction) {
        res.send();
    }

    init() {
        this.router.get('/', this.getCheck);
    }
}

// Create the HeroRouter, and export its configured Express.Router
const healthRoutes = new Health();
healthRoutes.init();

export default healthRoutes.router;