import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/Observable';
import { ScoreGood } from '@models/score-good.model';

@Injectable()
export class ScoreService {

  private readonly operationsPath: string = 'api/scores';

  constructor(private httpClient: HttpClient) { }

  public addScore(scoreGood: ScoreGood): Observable<ScoreGood> {
    return this.httpClient.post<ScoreGood>(`${environment.apiUrl}${this.operationsPath}`, scoreGood)
      .pipe(
        catchError(this.handleError<ScoreGood>(`addScore(scoreGood = ${scoreGood})`))
      );
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      return Observable.throw(error);
    };
  }
}
