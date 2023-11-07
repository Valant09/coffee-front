// car-resume.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarResumeService {
  private carResumeContent: string = '';
  setCarResumeContent(content: string) {
    this.carResumeContent = content;
  }

  getCarResumeContent() {
    return this.carResumeContent;
  }
}
