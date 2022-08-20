import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ConsultItemService } from "./consult-item.service";
import { ConsultItemCreateDto, ConsultItemUpdateDto } from "./consult-item.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Consult Item')
@Controller('consult-item')
export class ConsultItemController {
  constructor(
    private readonly consultItemService: ConsultItemService,
  ) {
  }

  @Post()
  createConsultItem(
    @Body() consultItemDto: ConsultItemCreateDto
  ) {
    return this.consultItemService.save(consultItemDto);
  }

  @Get()
  getAllConsultItem() {
    return this.consultItemService.findAll();
  }

  @Get('veteran/:veteranUuid')
  getAllConsultItemByVeteran(
    @Param('veteranUuid') veteranUuid: string,
  ) {
    return this.consultItemService.findByVeteran(veteranUuid);
  }
  
  @Delete(':consultItemUuid')
  deleteConsultItem(@Param('consultItemUuid') consultItemUuid: string) {
    return this.consultItemService.delete(consultItemUuid);
  }

  @Put(':consultItemUuid')
  updateConsultItem(
    @Param('consultItemUuid') consultItemUuid: string,
    @Body() consultItemDto: ConsultItemUpdateDto,
  ) {
    return this.consultItemService.update(consultItemUuid, consultItemDto)
  }
}
