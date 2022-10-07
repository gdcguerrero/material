import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviedbService } from '../services/moviedb.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, public service: MoviedbService) { }

  public apiMovieCard!: any;

  ngOnInit(): void {
    console.log('>>',this.data);
    this.getDataCard(this.data)
  }

  getDataCard(id: number) {
    const user = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=ee0e78a4218de29740513ad6fc39e3b8';
    let response = this.http.get(user).subscribe((resp:any) => {
      this.apiMovieCard = resp
      return resp;
    })
  }

  lists(){
    if (this.service.checkLists(this.apiMovieCard.id)) {
      this.service.removeLists(this.apiMovieCard.id)
    } else {
      this.service.addLists(this.apiMovieCard.id)
    }
  }

  favorites(){
    if (this.service.checkFavorites(this.apiMovieCard.id)) {
      this.service.removeFavorites(this.apiMovieCard.id)
    } else {
      this.service.addFavorites(this.apiMovieCard.id)
    }
  }

}
