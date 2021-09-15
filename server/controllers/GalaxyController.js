import BaseController from '../utils/BaseController'
import { galaxyService } from '../services/GalaxyService.js'

export class GalaxyController extends BaseController {
  constructor() {
    super('api/Galaxy')
    this.router
  }
}
