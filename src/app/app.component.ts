import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'map';

  title = "Shem's fun Angular Courses";
  post = {
    title: "Favorite component",
    isFavorite: true
  }

  onFavoriteChange(isFavorite){
    console.log('favo: ', isFavorite)
    console.log('onFavoriteChange() method has been triggered');
    
  }

  phoneBook = [
    {id:1, name: 'Shema Christophe'},
    {id:2, name: 'Yvette Christophe'},
    {id:3, name: 'Jaxon Christophe'},
  ]

  onAdd(){
    this.phoneBook.push({id:4, name:'Jason Jason'})
  }

  onRemove(contact){
    let index = this.phoneBook.indexOf(contact);
    this.phoneBook.splice(index,1);
  }
  
}
