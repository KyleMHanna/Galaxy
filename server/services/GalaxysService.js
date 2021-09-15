import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '../utils/Errors.js'

class GalaxysService {
  async getGalaxyById(galaxyId) {
    const galaxy = await dbContext.Galaxys.findById(galaxyId).populate('creator', 'name picture')
    if (!galaxy) {
      throw new BadRequest('Invalid galaxy Id')
    }
    return galaxy
  }

  async editGalaxy(galaxyId, galaxyData) {
    const galaxy = await this.getGalaxyById(galaxyId)
    galaxy.description = galaxyData.description || galaxy.description
    galaxy.name = galaxyData.name || galaxy.name
    await galaxy.save()
    return galaxy
  }

  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxys.create(galaxyData)
    return galaxy
  }

  async removeGalaxy(galaxyId) {
    const galaxy = await this.getGalaxyById(galaxyId)
    await galaxy.remove()
    return galaxy
  }

  async getGalaxy(query) {
    const galaxy = await dbContext.Galaxys.find(query).populate()
    return galaxy
  }
}

export const galaxysService = new GalaxysService()
