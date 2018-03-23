import { Injectable } from '@angular/core';
import { Good } from '@models/good.model';
import { GoodPaging } from '@models/good-paging.model';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/Observable';
import { CommentGood } from '@models/comment-good.model';

@Injectable()
export class GoodService {

    private readonly operationsPath: string = 'api/goods';
    public good: Good;

    constructor(private httpClient: HttpClient) { }

    public getGoodById(goodId: number): Observable<Good> {
        return this.httpClient.get<Good>(`${environment.apiUrl}${this.operationsPath}/${goodId}`)
            .pipe(
                catchError(this.handleError<Good>(`getGoodById(goodId = ${goodId})`))
            );
    }

    public getAllGoods(
        currentPage: number,
        itemsPerPage: number,
        categoryId: string): Observable<GoodPaging> {
        const httpParams = new HttpParams()
            .append('currentPage', `${currentPage}`)
            .append('itemsPerPage', `${itemsPerPage}`)
            .append('categoryId', `${categoryId}`);

        return this.httpClient.get<GoodPaging>(
            `${environment.apiUrl}${this.operationsPath}`, { params: httpParams })
            .pipe(
                catchError(this.handleError<GoodPaging>(`getAllGoods(${currentPage}, ${itemsPerPage}, ${categoryId})`))
            );
    }

    private handleError<T>(operation: string, result?: T) {
        return (error: any): Observable<T> => {
            return Observable.throw(error);
        };
    }
}
