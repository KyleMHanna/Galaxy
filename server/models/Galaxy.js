import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    galaxyId: { type: mongoose.Schema.Types.ObjectId }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
