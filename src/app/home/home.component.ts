import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('GamesKey');

    meta.addTags([
      { name: 'author', content: 'Niels Odgaard' },
      { name: 'keywords', content: 'gamekeys, games, pc games' },
      { name: 'description', content: 'A company that sells gamekeys and provides an excellent service' },
      { name: 'og:image', content: 'https://www.callofduty.com/content/dam/atvi/callofduty/wwii/home/Stronghold_Metadata_Image.jpg' },
      { name: 'og:type', content: 'article'}
    ])
  }
  

  ngOnInit() {

    $('#recipeCarousel').carousel({
    interval: 5000
  })

  $('.carousel .carousel-item').each(function () {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });
  }
}
