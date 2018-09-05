import {AccommodationComponent} from './accommodation/accommodation.component';
import {UserComponent} from './user/user.component';
import {IAccommodation} from './iaccommodation';

export interface IReservation {
  dateFrom: string;
  dateTo: string;
  status: number;
  accommodation: IAccommodation;
  user: UserComponent;
}
