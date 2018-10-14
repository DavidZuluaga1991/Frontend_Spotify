import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artista.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
  providers: [ArtistService]
})
export class ArtistaComponent implements OnInit {

  offset: number = 1;
  limit: number = 20;
  dataSpotify: any[];
  access_token:string;
  constructor(private activatedRoute: ActivatedRoute,private artistService: ArtistService) { 

  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  ngOnInit() {
    const params = this.getHashParams();
    this.access_token = params['access_token'];
    //localStorage.removeItem("access_token");
    if(this.access_token != null || localStorage.getItem("access_token")!= null){
      if(this.access_token == null){
        this.access_token = localStorage.getItem("access_token");
      }
      this.search(this.access_token);
    }
  }

  search(token:string) {
    if (window.localStorage) {
      localStorage.setItem("access_token", token);
    }
    else {
      throw new Error('Tu Browser no soporta LocalStorage!');
    }
    this.artistService.buscarArtistas(token)
      .subscribe(data => {
        this.dataSpotify = data['albums'];
      });
  }

}
