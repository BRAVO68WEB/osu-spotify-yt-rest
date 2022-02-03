import { Router } from 'express'
import { show } from './controller'

const router = new Router()

/**
 * @api {get} /yt/:id Retrieve youtube
 * @apiName RetrieveYoutube
 * @apiGroup Youtube
 * @apiSuccess {Object} youtube Youtube's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Youtube not found.
 */
router.get('/:id',
  show)

export default router
