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

  @Get('veteran/:veteranId')
  getAllReservationByVeteran(
    @Param('veteranId') veteranId: number
  ) {
    return this.reservationService.findAllByVeteran(veteranId);
  }

  @Get('consultee/:consulteeId')
  getAllReservationByConsultee(
    @Param('consulteeId') consulteeId: number
  ) {
    return this.reservationService.findAllByConsultee(consulteeId);
  }

  @Get('consultItem/:consultItemId')
  getAllReservationByConsultItem(
    @Param('consultItemId') consultItemId: number
  ) {
    return this.reservationService.findAllByConsultItem(consultItemId);
  }

  @Delete(':reservationId')
  deleteReservation(@Param('reservationId') reservationId: number) {
    return this.reservationService.delete(reservationId);
  }

  // TODO: 예약 상태의 변경

}
