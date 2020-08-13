// note initially when tried to run npm start it might error due to nodemon trying got run. re-run and should fix.
import { Summary } from './Summary';
import { MatchReader } from './MatchReader';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);


