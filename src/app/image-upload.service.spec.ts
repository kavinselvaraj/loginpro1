import { TestBed } from '@angular/core/testing';

import { ImageUploadService } from './image-upload.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ImageUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterTestingModule],
  }));

  it('should be created', () => {
    const service: ImageUploadService = TestBed.get(ImageUploadService);
    expect(service).toBeTruthy();
  });
});
