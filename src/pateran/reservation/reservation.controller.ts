import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ReservationService } from "./reservation.service";
import { ReservationCreateDto } from "./reservation.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Reservation')
@Controller('reservation')
export class ReservationController {
  constructor(
    private readonly reservationService: ReservationService,
  ) {
  }

  @Post()
  createReservation(
    @Body() reservationDto: ReservationCreateDto
  ) {
    return this.reservationService.save(reservationDto);
  }

  @Get()
  getAllReservation() {
    return this.reservationService.findAll();
  }

  @Get('veteran/:veteranUuid')
  getAllReservationByVeteran(
    @Param('veteranUuid') veteranUuid: string
  ) {
    return this.reservationService.findAllByVeteran(veteranUuid);
  }

  @Get('consultee/:consulteeUuid')
  getAllReservationByConsultee(
    @Param('consulteeUuid') consulteeUuid: string
  ) {
    return this.reservationService.findAllByConsultee(consulteeUuid);
  }

  @Get('consultItem/:consultItemUuid')
  getAllReservationByConsultItem(
    @Param('consultItemUuid') consultItemUuid: string
  ) {
    return this.reservationService.findAllByConsultItem(consultItemUuid);
  }

  @Delete(':reservationUuid')
  deleteReservation(@Param('reservationUuid') reservationUuid: string) {
    return this.reservationService.delete(reservationUuid);
  }

}
