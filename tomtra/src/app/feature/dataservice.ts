import { Injectable } from "@angular/core";

@Injectable()
export class DataService  {
 private   CounterPartName: any;

 public SetCounterPartName(rlc : any)
 {
    this.CounterPartName = rlc
 }

 public GetCounterPartName(): string
 {
    return this.CounterPartName;
 }

 
}

