import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from '@models/category.model';
import { environment } from '@env/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  private readonly operationsPath: string = 'api/categories';
  public categoryId: string;
  public currentPage: number;

  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<Category[]> {

    return this.httpClient.get<Category[]>(
      `${environment.apiUrl}${this.operationsPath}`)
      .pipe(
        catchError(this.handleError<Category[]>(`getCategories()`))
      );
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.throw(error);
    };
  }
}
