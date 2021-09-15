import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'
import { StarSchema } from '../models/Star'
import { GalaxySchema } from '../models/Galaxy'
import { MoonSchema } from '../models/Moon'
import { PlanetSchema } from '../models/Planet'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Stars = mongoose.model('Star', StarSchema);
  Galaxys = mongoose.model('Galaxy', GalaxySchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Moons = mongoose.model('Moon', MoonSchema);
}

export const dbContext = new DbContext()
