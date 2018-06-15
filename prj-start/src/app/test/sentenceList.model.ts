export class SentenceList{
  public id: number;
  public name: string;
  public time: string;
  public sentences: string;

  constructor(id:number, name: string, time: string, sentences: string) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.sentences = sentences;
  }
}