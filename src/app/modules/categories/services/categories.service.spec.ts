import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { noop } from 'rxjs';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let sut: CategoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriesService],
    });

    sut = TestBed.inject(CategoriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('has fetchCategories method, which', () => {
    let httpResponse: string[];

    beforeEach(() => {
      httpResponse = ['foo', 'bar'];
    });

    it('should call httpClient.get with correct params', () => {
      sut.fetchCategories().subscribe(noop);

      const req = httpMock.expectOne('https://api.chucknorris.io/jokes/categories');
      expect(req.request.method).toBe('GET');

      req.flush(httpResponse);
    });
    it('should return value from http response', (done) => {
      sut.fetchCategories().subscribe((result: string[]) => {
        expect(result).toEqual(httpResponse);
        done();
      });
      const req = httpMock.expectOne('https://api.chucknorris.io/jokes/categories');
      req.flush(httpResponse);
    });
  });
});
