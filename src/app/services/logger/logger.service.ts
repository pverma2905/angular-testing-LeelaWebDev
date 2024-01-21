import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
messages:string[]=[];
  constructor() {
    console.log("test")
   }

  log(message:string){
    console.log("test1")
     this.messages.push(message);
  }
}
