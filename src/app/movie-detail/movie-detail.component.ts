import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  movie_detail_id: string = 'nothing';
  movie_detail: any;

  constructor(
    private movieAPI: MovieService,
    private route: ActivatedRoute) {

    this.route.params.subscribe( // subscription
      params => {
        this.movie_detail_id = params['anup'];
        this.getMovieDetailFromAPICall(this.movie_detail_id);
      }
    );
  }

  getMovieDetailFromAPICall(imdbID:string){
    // API CALL
    //
    // Include the movie API service
    // Make an instance of it in the constructor
    // In this section here, make an API call to get the movie detail
    // hint ?t=tt123213
    // put the response into this.movie_detail
    this.movieAPI.getMovieDetail(this.movie_detail_id).subscribe((data:any) => {
      this.movie_detail = data;
      console.log(this.movie_detail)
    });


  }

  ngOnInit(): void {
  }

}
