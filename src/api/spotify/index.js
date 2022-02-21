import { Router } from "express";
import { show } from "./controller";

const router = new Router();

/**
 * @api {get} /spot/:id Retrieve spotify
 * @apiName RetrieveSpotify
 * @apiGroup Spotify
 * @apiSuccess {Object} spotify Spotify's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Spotify not found.
 */
router.get("/:trackID", show);

export default router;
