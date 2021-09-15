import { dbContext } from '../db/DbContext.js'
// import { BadRequest } from '../utils/Errors.js'

class StarsService {
  async getStarById(starId) {
    const star = await dbContext.Stars.findById(starId).populate()
    return star
  }

  async getStar(query) {
    const star = await dbContext.Stars.find(query).populate()
    return star
  }

  async createStar(starData) {
    const star = await dbContext.Stars.create(starData)
    return star
  }

  async editStar(starId, starData) {
    const star = await this.getStarById(starId)
    star.description = starData.description || star.description
    star.name = starData.name || star.name
    await star.save()
    return star
  }

  async removeStar(starId) {
    const star = await this.getStarById(starId)
    await star.remove()
    return star
  }
}
export const starsService = new StarsService()
