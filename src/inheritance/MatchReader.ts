// import { MatchResults } from './MatchResult';
// import { dateStringToDate } from './utils';
// import { CsvFileReader } from './CsvFileReader';

// type MatchData = [Date, string, string, number, number, MatchResults, string];

// export class MatchReader extends CsvFileReader<MatchData> {

//   mapRow(row: string[]) : MatchData {
//     return [
//       dateStringToDate(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3], 10),
//       parseInt(row[4], 10),
//       row[5] as MatchResults, // type assertion to tell ts that we know what type it is
//       row[6]
//     ]
//   }
// }