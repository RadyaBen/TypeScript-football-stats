import { MatchResult } from '../MatchResult';
export class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} times.`;
    }
}
