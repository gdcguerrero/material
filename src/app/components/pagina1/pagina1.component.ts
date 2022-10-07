import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  public apiMovie: any[]=[];
  public page: number = 1;

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.getData(this.page)
  }

  openDialog(id: number) {
    console.log('open > ', id);
    this.dialog.open(CardComponent, {
      data: id
    });
  }

  getData(pageURL:number) {
    const user = `https://api.themoviedb.org/3/discover/movie?api_key=ee0e78a4218de29740513ad6fc39e3b8&with_genres=878&page=${pageURL}`
    let response = this.http.get(user).subscribe((resp: any) => {
      this.apiMovie = this.apiMovie.concat(resp.results)  // concat()
    })
  }

  @HostListener("window:scroll")
  onScroll(): void {
    if (!this.bottomReached()) {
      console.log('entro');
      this.getData(this.page++)
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

  // onScroll(event: any){
  //   let _target = Element = event.target;
  //   console.log('>',_target);
  //   let position = _target.scrollTop;
  //   console.log('>>',position);
  //   let scrollH = _target.scrollHeigth; 
  //   console.log('>>>',scrollH);
  //   let element = _target.cleintHeigth;
  //   console.log('>>>>',element);

  //   let maxPosition = scrollH - element - 300;
  //   console.log('>=',maxPosition);

  //   if (position >= maxPosition) {
  //     this.page++
  //     this.getData(this.page);
  //   }
  // }
}