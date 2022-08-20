import { Controller, Get, Param } from "@nestjs/common";
import { SearchService } from "./search.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(
    private readonly searchService: SearchService
  ) {
  }

  @Get('v1/:keyword')
  basicSearch(
    @Param('keyword') keyword: string
  ) {
    return this.searchService.searchByKeywordContain(keyword);
  }


}
