import mongoose from 'mongoose'
import Module from 'src/types/module'

type Args = {
  db: typeof mongoose
  moduleId: string
  body: {
    progress?: number
    finished?: boolean
  }
}

const updateModuleService = async (args: Args) => {
  try {
    const { moduleId, db, body } = args

    const module = await db.model<Module>('Module').findOne({ _id: new mongoose.Types.ObjectId(moduleId) })

    if (!module) {
      throw new Error('Module does not exist')
    }

    module.progress = body.progress ?? module.progress
    module.finished = body.finished ?? module.finished
    await module.save()
  } catch (error) {
    throw error
  }
}

export default updateModuleService
