import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss']
})
export class Pagina2Component implements OnInit {
  
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
    const user = 'https://api.themoviedb.org/3/discover/movie?api_key=ee0e78a4218de29740513ad6fc39e3b8&with_genres=12';
    let response = this.http.get(user).subscribe((resp:any) => {
      this.apiMovie = resp['results']
      return resp;
    })
  }
}
