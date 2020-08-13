import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResults';
import { MatchData } from './MatchData';

interface DataReader {
  read() : void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(
      new CsvFileReader(filename)
    )
  }
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load() : void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]) : MatchData => { // use topple
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3], 10),
        parseInt(row[4], 10),
        row[5] as MatchResults, // type assertion to tell ts that we know what type it is
        row[6]
      ]
    })
  }


}