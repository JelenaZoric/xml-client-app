import {IAccommodation} from './iaccommodation';
import {IUser} from './iuser';

export interface IReservationDto {
  dateFrom: string;
  dateTo: string;
  accommodationId: number;
}
