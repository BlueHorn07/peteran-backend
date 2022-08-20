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

  @Get('veteran/:veteranId')
  getAllConsultItemByVeteran(
    @Param('veteranId') veteranId: number,
  ) {
    return this.consultItemService.findByVeteran(veteranId);
  }
  
  @Delete(':consultItemId')
  deleteConsultItem(@Param('consultItemId') consultItemId: number) {
    return this.consultItemService.delete(consultItemId);
  }

  @Put(':consultItemId')
  updateConsultItem(
    @Param('consultItemId') consultItemId: number,
    @Body() consultItemDto: ConsultItemUpdateDto,
  ) {
    return this.consultItemService.update(consultItemId, consultItemDto)
  }
}
