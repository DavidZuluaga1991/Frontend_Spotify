import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../artista/artista.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albunes',
  templateUrl: './albunes.component.html',
  styleUrls: ['./albunes.component.css'],
  providers: [ArtistService]
})
export class AlbunesComponent implements OnInit {

  dataAlbum: any[];
  nameArt: string;
  imagesArt: any[];
  constructor(private activatedRoute: ActivatedRoute,
    private artistService: ArtistService) 
  { }

  ngOnInit() {
    
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.artistService.buscarArtista(id)
      .subscribe(data => {
        this.nameArt = data['name'];
        this.imagesArt = data['images'];
      });

    this.artistService.buscarAlbum(id)
    .subscribe(data => {
      this.dataAlbum = data['tracks'];
    });
  }
}
