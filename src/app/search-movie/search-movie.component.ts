import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.sass']
})
export class SearchMovieComponent implements OnInit {
  todos: any;
  inputHighlight: string =  'red';
  movies: any;
  searchTerm: string = 'Sherek';

  constructor(
    private movieAPI: MovieService,
    private route: ActivatedRoute
  ) {

    this.todos = [
      {id: 1, content: 'eat'},
      {id: 2, content: 'sleep'},
    ]

   }

  showMovieDetail(){
    console.log('Show Detail');
  }

  searchMovie(){
    // let searchTerm = 'shrek'; // Get that from an input control.
    this.movieAPI.getMovies(this.searchTerm)
    .subscribe(
      // This is our callback when the getMovies returns some data
      (data:any) =>{
        this.movies = data['Search']; // data.Search;
    })
  }

  changeBorder(e: any, color: string){
    console.log(e.target)
    e.target.style.borderColor = color;
    console.log(color)
  }

  onKeyUp(event: any, data: string) {
    console.log( `Key Up: ${event.target.value} Data: ${data}`);
    this.searchTerm = event.target.value;
  }

  onKeyDown(event: any) {
    console.log( `Key Down: ${event.target.value}`);
  }

  onKeyPress(event: any) {
    console.log( `Key Press: ${event.target.value}`);
  }

  ngOnInit(): void {
    this.inputHighlight = 'red'
  }

}
