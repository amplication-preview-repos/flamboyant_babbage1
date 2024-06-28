import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReverseRequestService } from "./reverseRequest.service";
import { ReverseRequestControllerBase } from "./base/reverseRequest.controller.base";

@swagger.ApiTags("reverseRequests")
@common.Controller("reverseRequests")
export class ReverseRequestController extends ReverseRequestControllerBase {
  constructor(
    protected readonly service: ReverseRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
