import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../reservation.service';
import { AccommodationService } from '../accommodation.service';
import {IReservation} from '../ireservation';
import {IReservationDto} from '../ireservationdto';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  private reservations;

  private accommodations;

  constructor(private reservationService: ReservationService, private accommodationService: AccommodationService) { }

  ngOnInit() {
    this.reservationService.getReservations().subscribe(data => this.reservations = data);
    this.accommodationService.getAccommodations().subscribe(data => this.accommodations = data);
  }

  addReservation(accommodation) {
    const reservation: IReservationDto = {
      accommodationId: accommodation.id,
      dateFrom: '',
      dateTo: ''
    };

    this.reservationService.addReservation(reservation).subscribe(data => {
      this.reservationService.getReservations().subscribe(data => this.reservations = data);
    });
  }

}
