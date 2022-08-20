import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { VeteranService } from "./veteran.service";
import { VeteranCreateDto, VeteranUpdateDto } from "./veteran.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Veteran')
@Controller('veteran')
export class VeteranController {
  constructor(
    private readonly veteranService: VeteranService,
  ) {
  }

  @Post()
  createVeteran(
    @Body() veteranDto: VeteranCreateDto
  ) {
    return this.veteranService.save(veteranDto);
  }

  @Get()
  getAllVeteran() {
    return this.veteranService.findAll();
  }

  @Delete(':veteranId')
  deleteVeteran(@Param('veteranId') veteranId: number) {
    return this.veteranService.delete(veteranId);
  }

  @Put(':veteranId')
  updateVeteran(
    @Param('veteranId') veteranId: number,
    @Body() veteranDto: VeteranUpdateDto,
  ) {
    return this.veteranService.update(veteranId, veteranDto)
  }
}
