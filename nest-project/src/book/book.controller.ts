import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schemas';

@Controller('book')
export class BookController {
    constructor(private bookService:BookService){}
    @Get()
    getAllBooks():Promise<Book[]>{
        return this.bookService.findAll()
        
    }
}
