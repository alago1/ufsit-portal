import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable()
export class ExternalFileService {

  constructor(private restService: RestService) {
  }

  // gets a signed url to upload an file
  public signFile(fileName: string, fileType: string) {
    return this.restService.signFile(fileName, fileType);
  }

  // uploads a writeup
  public uploadWriteup(data: string, writeupName: string, writeupDescription: string, writeupId: number) {
    return this.restService.uploadWriteup(data, writeupName, writeupDescription, writeupId);
  }

  // gets a writeup
  public getWriteup(id: number) {
    return this.restService.getWriteup(id);
  }

  // uploads an file
  public uploadFile(file: File, url: string) {
    return this.restService.uploadFile(file, url);
  }

  public getResumeLink() {
    return this.restService.getResumeLink();
  }

  // uploads a resume
  public signResume(fileName: string, fileType: string) {
    return this.restService.signResume(fileName, fileType);
  }

}
