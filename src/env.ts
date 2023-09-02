import { createEnv } from '@t3-oss/env-core'
import { config } from 'dotenv'
import { z } from "zod"

config()
export const env = parseEnv()

function parseEnv() {
  try {
    return createEnv({
      isServer: true,
      server: {
        VARUS_EMAIL_JS_SERVICE: z.string(),
        VARUS_EMAIL_JS_TEMPLATE: z.string(),
        VARUS_EMAIL_JS_PUBLIC_KEY: z.string(),
        VARUS_EMAIL_JS_PRIVATE_KEY: z.string(),
        VARUS_JSON_STORE_FOLDER: z.string(),
      },
      runtimeEnv: process.env
    })
  } catch {
    process.exit(1)
  }
}