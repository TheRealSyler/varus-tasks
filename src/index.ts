import { CronJob } from 'cron'
import { notification } from "./notification"
import { sendEmail } from "./sendEmail"
import { readFromStore, type Task } from "./store"

notification("Started")

const state = readFromStore()

for (const task of state.tasks) {
  new CronJob(task.schedule, () => executeTask(task), null, true)
  console.log("created cronJob for task:", task.title)
}

function executeTask(task: Task) {
  notification(`${task.title}: ${task.description}`)

  if (task.sendEmail) {
    sendEmail(task.title, task.description)
  }
}