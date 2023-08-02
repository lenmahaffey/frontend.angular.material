import { MessageType } from "./message-type.interface"

export class Message {
  title: string
  text: string
  type: MessageType
  time: Date
  autoDismiss: boolean

  constructor(type?: MessageType) {
    this.type = type ?? MessageType.Error
    this.autoDismiss = false
    switch(this.type)
    {
      case MessageType.Error:
        this.title = "Error"
        this.text = "There was an unexplained error"
        this.time = new Date()
        break;
      case MessageType.Success:
        this.title = "Success!"
        this.text = "We won!"
        this.time = new Date()
        break;
      case MessageType.Warning:
        this.title = "Warning"
        this.text = "Watch out!"
        this.time = new Date()
        break;
      default:
        this.title = "Error"
        this.text = "There was an unexplained error"
        this.time = new Date()
    }
  }
}


