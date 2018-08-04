import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  template: `
        <h2>{{ "Title: " + title }}</h2>
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ul>
    `
})
export class AuthorsComponent implements OnInit {
  title = "List of authors";
  authors;
  constructor(author: AuthorsService) {
    this.authors = author.getAuthors();
   }

  ngOnInit() {
  }

}
