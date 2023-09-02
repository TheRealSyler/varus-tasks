import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { normalize } from "path"
import { z } from "zod"
import { env } from "./env"

const STORE_PATH = normalize(`${env.VARUS_JSON_STORE_FOLDER}/state.json`)
console.log('STORE PATH:', STORE_PATH)

const taskSchema = z.object({
  schedule: z.string(),
  title: z.string(),
  description: z.string(),
  sendEmail: z.boolean().optional()
})

const stateSchema = z.object({
  tasks: z.array(taskSchema)
})

export type Task = z.TypeOf<typeof taskSchema>
export type State = z.TypeOf<typeof stateSchema>
export function writeToStore(state: State) {
  if (!existsSync(env.VARUS_JSON_STORE_FOLDER)) {
    mkdirSync(env.VARUS_JSON_STORE_FOLDER, { recursive: true })
  }
  writeFileSync(STORE_PATH, JSON.stringify(state, null, 2))
}

export function readFromStore(): State {
  try {
    return stateSchema.parse(JSON.parse(readFileSync(STORE_PATH).toString()))
  } catch {
    return {
      tasks: []
    }
  }
}

