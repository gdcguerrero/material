import { Injectable } from '@angular/core';
import { Constants } from 'src/app/utils/constants.class';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private addMovie(id: number, key: string) {
    let miArray = JSON.parse(localStorage.getItem(key) ?? '[]')
    if (miArray.indexOf(id) == -1) {
      miArray.push(id)
      localStorage.setItem(key, JSON.stringify(miArray))
    }
  }

  addLists(id: number) {
    this.addMovie(id, Constants.myLists)
  }

  addFavorites(id: number) {
    this.addMovie(id, Constants.myFavorites)
  }

  private removeMovie(id: number, key: string) {
    let miArray = JSON.parse(localStorage.getItem(key) ?? '[]')
    let index = miArray.indexOf(id)
    if (index > -1) {
      miArray.splice(index, 1)
      localStorage.setItem(key, JSON.stringify(miArray))
    }
  }

  removeLists(id: number) {
    this.removeMovie(id, Constants.myLists)
  }

  removeFavorites(id: number) {
    this.removeMovie(id, Constants.myFavorites)
  }

  private checkMovie(id: number, key: string) : boolean {
    let miArray = JSON.parse(localStorage.getItem(key) ?? '[]')
    return (miArray.indexOf(id) > -1)
    }

  checkLists(id: number) : boolean {
    return this.checkMovie(id, Constants.myLists)
  }

  checkFavorites(id: number) : boolean {
    return this.checkMovie(id, Constants.myFavorites)
  }
}