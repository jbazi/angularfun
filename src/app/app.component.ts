import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Shem's fun Angular Courses";
  post = {
    title: "Favorite component",
    isFavorite: true
  }

  onFavoriteChange(isFavorite){
    console.log('favo: ', isFavorite)
    console.log('onFavoriteChange() method has been triggered');
    
  }
}
