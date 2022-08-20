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

  @Delete(':veteranUuid')
  deleteVeteran(@Param('veteranUuid') veteranUuid: string) {
    return this.veteranService.delete(veteranUuid);
  }

  @Put(':veteranUuid')
  updateVeteran(
    @Param('veteranUuid') veteranUuid: string,
    @Body() veteranDto: VeteranUpdateDto,
  ) {
    return this.veteranService.update(veteranUuid, veteranDto)
  }
}