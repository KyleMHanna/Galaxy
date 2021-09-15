import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MoonSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    moonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Planet' },
    planetId: { type: mongoose.Schema.Types.ObjectId }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
