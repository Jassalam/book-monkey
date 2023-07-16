

import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(() => {
   
    service = new BookStoreService();
  });

  it('should hold a hardcoded list of 2 books', ()=>{
    const books = service.getAll();
    expect(books).toHaveSize(2);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
