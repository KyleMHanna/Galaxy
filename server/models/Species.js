import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SpeciesSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    starId: { type: mongoose.Schema.Types.ObjectId },
    galaxyId: { type: mongoose.Schema.Types.ObjectId }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
