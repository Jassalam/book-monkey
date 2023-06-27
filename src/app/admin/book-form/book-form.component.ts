import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {


  @Output() submitBook = new EventEmitter<Book>();

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    subtitle: new FormControl('', {nonNullable: true}),
    isbn: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]
    }),
    description: new FormControl('',{nonNullable: true}),
    published: new FormControl('', {nonNullable: true}),
    thumbnailUrl: new FormControl('', {nonNullable: true}),

    authors: new FormArray([
      new FormControl('', { nonNullable: true})
    ])
  });

  get authors(){
    return this.form.controls.authors;
  }

  addAuthorControl(){
    this.authors.push(
      new FormControl('', {nonNullable: true})
    );
  }

  submitForm(){
    const formValue = this.form.getRawValue();
    const authors = formValue.authors.filter(author => !!author);

    const newBook: Book = {
      ...formValue,
      authors
    };
    this.submitBook.emit(newBook);
  }

}
