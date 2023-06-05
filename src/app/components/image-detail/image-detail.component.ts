import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css'],
})
export class ImageComponent implements OnInit {
  image!: Image;

  constructor(
    private imagesServices: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    if (identifier !== null) {
      this.imagesServices.getImageById(identifier).subscribe((image) => {
        if (!image) {
          return this.router.navigateByUrl('/');
        }

        this.image = image;
        console.log('Image --> ', this.image);
        return image;
      });
    }
  }
}
