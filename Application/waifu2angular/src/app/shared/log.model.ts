export class EventLog {

    public id:string;
    public log_type:string;
    public action: string;
    public user: string;
    public image: string;
    public time: string;
    
    constructor(id:string, log_type:string, action: string, user: string, image: string, time:string) {

      this.id=id;
      this.log_type = log_type;
      this.action = action;
      this.user = user;
      this.image = image;
      this.time = time;

    }
  }
  