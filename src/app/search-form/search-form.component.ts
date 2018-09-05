import { Component, OnInit } from '@angular/core';
import {AccommodationComponent} from '../accommodation/accommodation.component';
import {AccommodationService} from '../accommodation.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public input: any;

  types = ['hotel', 'apartman', 'bed&breakfast'];

  place: string;

  numPersons: number;


  private accommodations;

  submitted = false;

  constructor(private accommodationService: AccommodationService) { }

  ngOnInit() {
    this.accommodationService.getAccommodations().subscribe(data => this.accommodations = data);
  }

  onSubmit(place, numPersons) {
    this.submitted = true;
    this.accommodationService.search(place, numPersons).subscribe(data => this.accommodations = data);
    console.log('usao u search form');
  }

}
