import { SentenceList } from "./test/sentenceList.model";
// import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

export class TestService {
    // constructor(private http: Http) {}

    private testSentences: string = '';
    private sentenceLists: SentenceList[] = [
        new SentenceList(
            2,
            'list 1',
            '06/14/2018',
            'I want to watch a movie.'
        ),
        new SentenceList(
            1,
            'list 2',
            '06/13/2018',
            'can you show me Frozen.'
        )
    ]
    private testResults: string = '';
    
    getSentenceLists() {
        return this.sentenceLists;
        // this.http.get('http://sentence-list')
        // .map(
        //     (response: Response) => {
        //         const sentenceLists: SentenceList[] = response.json();
        //         return sentenceLists;
        //       }
        //     )
        //     .subscribe(
        //       (sentenceLists: SentenceList[]) => {
        //         this.sentenceLists = sentenceLists;
        //       }
        //     );
    }

    addList(name: string, sentences: string) {
        var id = (this.sentenceLists).length++;
        var time = new Date().toLocaleDateString()
        var newSentenceList = 
        new SentenceList(
            id,
            name,
            time,
            sentences
        );
        console.log("test servie is adding", newSentenceList);
        // req = {};
        // return this.http.post('http://add-sentenceList', req)
        // .subscribe(
        //     (res: Response) => {
        //         console.log(res);
        //     }
        // );
    }

    runTest(sentences) {
        console.log("running test with", sentences);
        // var req = 
        // {
        //     "dataServiceId": "913912916",
        //     "searchString": sentences
        //   };
        // return this.http.post('http://34.229.185.51:5000/video/3rd', req)
        // .subscribe(
        //     (res: Response) => {
        //         console.log(res);
        //     }
        // );
    }
}