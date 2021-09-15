import BaseController from '../utils/BaseController'
import { starsService } from '../services/StarsService.js'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
      .get('', this.getStar)
      .post('', this.createStar)
      .put('/:starId', this.editStar)
      .delete('/:starId', this.removeStar)
  }

  async getStar(req, res, next) {
    try {
      const star = await starsService.getStar(req.query)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async createStar(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async removeStar(req, res, next) {
    try {
      const star = await starsService.removeStar(req.params.starId)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async editStar(req, res, next) {
    try {
      const star = await starsService.editStar(req.params.starId, req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
