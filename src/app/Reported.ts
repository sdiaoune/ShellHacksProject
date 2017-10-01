export class Reported {
  id: number;
  timestamp: Date;
  reportername: string;
  reportermail: string;
  pseudoname: string;
  picturename: string;
  constructor(id, timestamp, reportername, reportermail, pseudoname, picturename){
    this.id = id;
    this.timestamp = timestamp;
    this.reportername = reportername;
    this.reportermail = reportermail;
    this.pseudoname = pseudoname;
    this.picturename = picturename;

  }
}
