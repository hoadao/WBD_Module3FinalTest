import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public URL = 'http://localhost:8081';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.URL + '/books');
  }

  create(book: Book) {
    return this.http.post(`${this.URL + '/books'}`, book);
  }

  mark(book: Book): Observable<any> {
    return this.http.put(`${this.URL}/${book.id}`, book, httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Book>(`${this.URL}/${id}`, httpOptions);
  }
}

