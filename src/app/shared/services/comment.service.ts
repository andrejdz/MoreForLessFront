import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/Observable';
import { CommentGood } from '@app/shared/models/comment-good.model';

@Injectable()
export class CommentService {

  private readonly operationsPath: string = 'api/comments';

  constructor(private httpClient: HttpClient) { }

  public addComment(commentGood: CommentGood): Observable<CommentGood> {
    return this.httpClient.post<CommentGood>(`${environment.apiUrl}${this.operationsPath}`, commentGood)
      .pipe(
        catchError(this.handleError<CommentGood>(`addComment(commentGood = ${commentGood})`))
      );
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      return Observable.throw(error);
    };
  }
}
