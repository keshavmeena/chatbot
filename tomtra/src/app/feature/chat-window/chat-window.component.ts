import { Component, OnInit, Input } from '@angular/core';
import { chat } from "app/shared/chat";
import {ApiAiClient} from "api-ai-javascript/ApiAiClient"
import {ApiAiStreamClient} from "api-ai-javascript/ApiAiStreamClient";
import { SpeechRecognitionService } from 'app/feature/speech-recognition.service';
import { DataService } from "app/feature/dataservice";
import { Router } from "@angular/router";
import { rlcModel } from "app/shared/rlc.contract";
const client = new ApiAiClient({ accessToken: '8c071a8d7aa74f11995635ad901b4bfa', streamClientClass: ApiAiStreamClient });

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  rlcObject: any;
  Action:any;
  Parameters:any;
  router: any;
  bank_name: any;
  query_question:string="which bank details you want to see?";
  response: any;
  apiResult:any;
  enteredtext: any;
  speechData: string;
  showSearchButton: boolean;

  public chatlist: Array<chat> = [];

  constructor(private speechRecognitionService: SpeechRecognitionService, r: Router, public dataService: DataService) 
  {
        this.router = r;
        this.showSearchButton = true;
   }
  ngOnInit() {
    let rlcmodel = new rlcModel();
    this.rlcObject = rlcmodel.rlcObject;

  }

  sendChat(){
    this.chatlist.push(new chat(this.enteredtext, false));
    //find if this bank is present in the list and pick the rlc object
    

  // if(true)
   // {
   //   this.dataService.SetCounterPartName(this.rlcObject);
   // }
    
    this.sendRequest(this.enteredtext);
  
    console.log(this.enteredtext);
    this.enteredtext=null;
  }

    public sendRequest(msg){
    client.textRequest(msg)
      .then((res) => {/* do something */
       this.apiResult = res;
       this.response=res.result.fulfillment.speech;
       this.Action=res.result.action;
       console.log(this.apiResult.result.parameters.bank);
       //this.Parameters=res.result.para
       
          this.chatlist.push(new chat(this.response, true));
    })
    .catch((error) => {/* do something here too */})
  }
  

  activateSpeechSearchMovie(): void {
        this.showSearchButton = false;

        this.speechRecognitionService.record()
            .subscribe(
            //listener
            (value) => {
                this.speechData = value;
                console.log(value);
            },
            //errror
            (err) => {
                console.log(err);
                if (err.error == "no-speech") {
                    console.log("--restatring service--");
                    this.activateSpeechSearchMovie();
                }
            },
            //completion
            () => {
                this.showSearchButton = true;
                console.log("--complete--");
                this.activateSpeechSearchMovie();
            });
    }

  goToLineSituation(bank:any): void{
    this.dataService.SetCounterPartName(bank);
    this.router.navigate(['/linesituation']); 
  }
}
