import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) { }

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


}
