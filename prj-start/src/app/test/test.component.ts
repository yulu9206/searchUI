import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestService } from '../test.service';
import { SentenceList } from './sentenceList.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  newList: boolean = true;
  listName: string = "default name";
  sentences: string = "this is default sentenceList";
  sentenceList: SentenceList;
  sentenceLists: SentenceList[];

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit() {
    this.sentenceLists = this.testService.getSentenceLists();
    console.log(this.sentenceLists);
  }
  
  onSelect(sentenceList) {
    console.log("select is clicked");
    this.newList = false;
    this.sentenceList = sentenceList;
    this.sentences = this.sentenceList.sentences;
    this.listName = this.sentenceList.name;
  }

  onClear() {
    this.newList = true;
    this.listName = "";
    this.sentences = "";
  }

  onTest() {
    if (this.newList == true) {
      this.testService.addList(this.listName, this.sentences);
    }
    this.testService.runTest(this.sentences);
    console.log("test compo has got", this.sentences)
    this.router.navigate(['/results']);
    
  }
}
