import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import { DataService } from "app/feature/dataservice";
import { chat } from "app/shared/chat";
import { rlcModel } from "app/shared/rlc.contract";

@Component({
  selector: 'app-rlc',
  templateUrl: './rlc.component.html',
  styleUrls: ['./rlc.component.css']
})
export class RlcComponent implements OnInit, OnDestroy {

  private rlcObject: any;
  
  lol:boolean=false;
  title = 'Risk legal counterpart';
  private router: Router;
  
  constructor(r: Router, public dataService: DataService){
    this.router = r;
    let rlcmodel = new rlcModel();
    this.rlcObject = rlcmodel.rlcObject;
  }

  setRlc(rl:string): void{
    this.dataService.SetCounterPartName(rl);
    this.router.navigate(['/linesituation']); 
  }

  ngOnInit(): void {
    console.log("hello");
  }
  ngOnDestroy() {
    }

  onDialogShow(): void{
  }

  onDialogHide(): void{
  }

  

  show() : void{
  }

}

