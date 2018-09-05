import { Component, OnInit } from '@angular/core';
import { IAccommodation } from '../iaccommodation';
import { AccommodationService } from '../accommodation.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent implements OnInit {

  private accommodations;

  constructor(private accommodationService: AccommodationService) { }

  ngOnInit() {
    this.accommodationService.getAccommodations().subscribe(data => this.accommodations = data);
  }

  search(place, numPersons) {
    this.accommodationService.search(place, numPersons).subscribe(data => {this.accommodations = data; console.log('dataaa ' + data); } );
  }

}
