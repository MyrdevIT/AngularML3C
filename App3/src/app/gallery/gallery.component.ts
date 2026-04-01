import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface IWholesomePeople  {
    title: string;
    imag: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  // images: IWholesomePeople[] = [
  //   
  //  
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Joseph_Stalin_1932_Portrait_%283x4_cropped_c%29.jpg/960px-Joseph_Stalin_1932_Portrait_%283x4_cropped_c%29.jpg"


  // ];

  images: IWholesomePeople[] = [
    {title: "pieny pan malasz", imag: "https://pbs.twimg.com/media/CEBVLSUVIAAzft-.jpg"},
    {title: "bombowy kolega", imag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Hirohito_in_dress_uniform_%28cropped%29.jpg"},
    {title: "pomarancza", imag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/960px-Donald_Trump_official_portrait.jpg"},
    {title: "imperator", imag: "https://ocdn.eu/pulscms-transforms/1/9-Gk9kpTURBXy84NzQ5ZmE3OTk4YTcyY2I5NWY0NTkzNjQ2ODA1NWM4OS5qcGeSlQPNAQsAzQQqzQJYkwXNBLDNAqTeAAGhMAE"},
    {title: "wyzwoliciel", imag: "https://allegralaboratory.net//wp-content/uploads/2014/12/putingridingbear.jpg"},
    {title: "wielki swietny cudowny wspanialy idealny genialny bohater narodu Chinskiego Mao Zedong", imag: "https://interios.org.pl/wp-content/uploads/2025/09/Mao_Zedong_Color-759x1024.jpg"},
    {title: "gdzie sie podziala 1/4 ludności kambodży?", imag: "https://www.rfa.org/resizer/v2/4AQZUFX5KYMLMM7TS7XQEPTBQU.jpg?auth=f68543aa288a9e7716ba99ffb616e2ef6434e53e4bd9eab18a946bf98100e62d&width=400&height=589"},
    {title: "Krystian Pajek", imag:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Joseph_Stalin_1932_Portrait_%283x4_cropped_c%29.jpg/960px-Joseph_Stalin_1932_Portrait_%283x4_cropped_c%29.jpg" },

  ]

}
