import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JokeService } from './joke.service';
import { Joke } from './joke.interface';
import { noop } from 'rxjs';

describe('JokeService', () => {
  let sut: JokeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JokeService],
    });

    sut = TestBed.inject(JokeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('has fetchJoke method, which', () => {
    let httpResponse: Joke;

    beforeEach(() => {
      httpResponse = {
        created_at: 'some time ago',
        icon_url: 'some icon',
        id: 'some id',
        updated_at: 'some time ago',
        url: 'some url',
        value: 'Some really funny joke',
      };
    });

    it('should call httpClient.get with correct params', () => {
      sut.fetchJoke('foo-category').subscribe(noop);

      const req = httpMock.expectOne('https://api.chucknorris.io/jokes/random?category=foo-category');
      expect(req.request.method).toBe('GET');

      req.flush(httpResponse);
    });
    it('should return value from http response', (done) => {
      sut.fetchJoke('bar-category').subscribe((result: Joke) => {
        expect(result).toEqual(httpResponse);
        done();
      });
      const req = httpMock.expectOne('https://api.chucknorris.io/jokes/random?category=bar-category');
      req.flush(httpResponse);
    });
  });
});
