import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    starId: { type: mongoose.Schema.Types.ObjectId },
    planetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Star' }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
