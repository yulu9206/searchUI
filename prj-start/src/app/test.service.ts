export class TestService {
    private testSentences: string = '';
    
    private testResults: string = '';

    addSentences(sentences: string) {
        this.testSentences = sentences;
        console.log("test servie has got", this.testSentences);
    }
}