import {AccommodationComponent} from './accommodation/accommodation.component';
import {UserComponent} from './user/user.component';

export interface IReservation {
  dateFrom: string;
  dateTo: string;
  status: number;
  accommodation: AccommodationComponent;
  user: UserComponent;
}
