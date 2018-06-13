import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @ViewChild('sentenceInput') sentenceInputRef: ElementRef;

  constructor(private testService: TestService) { }

  ngOnInit() {
  }
  
  onTest() {
    const sentences = this.sentenceInputRef.nativeElement.value;
    console.log("test compo has got", sentences)
    this.testService.addSentences(sentences);
  }
}
