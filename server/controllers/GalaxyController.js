import BaseController from '../utils/BaseController'
import { galaxysService } from '../services/GalaxysService.js'
import { logger } from '../utils/Logger.js'

export class GalaxyController extends BaseController {
  constructor() {
    super('api/Galaxy')
    this.router
      .get('', this.getGalaxys)
      .get('', this.getGalaxy)
      .post('', this.createGalaxy)
      .put('', this.editGalaxy)
      .delete('/:galaxyId', this.removeGalaxy)
  }

  async getGalaxys(req, res, next) {
    try {
      const galaxys = await galaxysService.getGalaxy(req.query)
      res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxy(req, res, next) {
    try {
      const galaxy = await galaxysService.getGalaxyById(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxy = await galaxysService.createGalaxy(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async removeGalaxy(req, res, next) {
    try {
      const galaxy = await galaxysService.removeGalaxy(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async editGalaxy(req, res, next) {
    try {
      const galaxy = await galaxysService.editGalaxy(req.params.galaxyId, req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
