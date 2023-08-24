export class DialogOptions implements DialogOptions
{
  title: string
  message: string
  buttonLabel: string

  constructor(title: string = "", message:string = "", buttonLabel:string = "")
  {
    this.title = title
    this.message = message
    this.buttonLabel = buttonLabel
  }
}
