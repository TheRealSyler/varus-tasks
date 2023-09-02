import { notify } from 'node-notifier'

export async function notification(message: string) {
  return new Promise((resolve, reject) => {
    notify({
      message,
      reply: true,
      title: "Varus Tasks",
      icon: `${__dirname}/assets/notification-icon.png`,
    },
      (err, res) => {
        if (err) {
          reject(err)
          return
        }
        resolve(res)
      })
  })
}
