import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit{
  
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
    const user = 'https://api.themoviedb.org/3/discover/movie?api_key=ee0e78a4218de29740513ad6fc39e3b8&language=es-MX&region=MX&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=buy';
    let response = this.http.get(user).subscribe((resp:any) => {
      this.apiMovie = resp['results']
      return resp;
    })
  }
}
  // -----------------------------------  map christian
  // getMovies(): Observable<any>{
  //   return this.http.get(this.apiMovie).pipe(
  //     map((res:any) => {
  //       const response: any [] =[]
  //       res.results.forEach((el:any) => {
  //         let newRes = {
  //           id: el.id,
  //           poster: el.poster_path
  //         }
  //         response.push(newRes)
  //       });
  //       return response
  //     })
  //   )
  // }