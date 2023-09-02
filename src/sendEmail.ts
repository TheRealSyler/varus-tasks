import { send } from '@emailjs/nodejs'
import { env } from "./env"

export async function sendEmail(subject: string, content: string) {
  return send(env.VARUS_EMAIL_JS_SERVICE, env.VARUS_EMAIL_JS_TEMPLATE, { subject, content }, { publicKey: env.VARUS_EMAIL_JS_PUBLIC_KEY, privateKey: env.VARUS_EMAIL_JS_PRIVATE_KEY })
}
