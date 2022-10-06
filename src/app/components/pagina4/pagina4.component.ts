import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.scss']
})
export class Pagina4Component implements OnInit{
  
  public apiMovie!: any;

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }

  openDialog(id: number) {
    console.log('open > ',id);
    this.dialog.open(CardComponent,{
      data: id
    });
  }
  
  getData() {
    const user = 'https://api.themoviedb.org/3/discover/movie?api_key=ee0e78a4218de29740513ad6fc39e3b8&language=es-MX&region=MX&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=buy';
    let response = this.http.get(user).subscribe((resp:any) => {
      this.apiMovie = resp['results']
      return resp;
    })
  }
}