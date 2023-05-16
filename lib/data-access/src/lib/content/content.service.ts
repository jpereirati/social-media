import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Content, ContentResponse, Query, UserContent } from './content.model';
import { environment } from '@environment';
import { AuthService } from '../auth';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private apiUrl: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.apiUrl = environment.API_URL;
  }

  createContent(content: Content) {
    return this.http.post(`${this.apiUrl}/content`, content, {
      headers: { xtoken: this.authService.getToken() as string },
    });
  }

  getContent(content: UserContent) {
    return this.http.get<ContentResponse>(`${this.apiUrl}/content`, {
      params: { ...content },
      headers: { xtoken: this.authService.getToken() as string },
    });
  }

  updateContent(content: Content, id: string) {
    return this.http.patch(`${this.apiUrl}/content/${id}`, content, {
      headers: { xtoken: this.authService.getToken() as string },
    });
  }

  generate(content: Query) {
    return this.http.post<any>(
      `${this.apiUrl}/generate`,
      { ...content },
      {
        headers: { xtoken: this.authService.getToken() as string },
      }
    );
  }
}
