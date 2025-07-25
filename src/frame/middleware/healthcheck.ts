import express from 'express'
import { noCacheControl } from './cache-control'

const router = express.Router()

/**
 * Returns the healthiness of the service.
 * This may be used by Moda to determine whether this
 * instance remains in the pool to handle requests
 * For example: if we have a failing database connection we may return a 500 status here.
 */
router.get('/', function healthcheck(req, res) {
  noCacheControl(res)

  res.sendStatus(200)
})

export default router
