import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReverseRequestResolverBase } from "./base/reverseRequest.resolver.base";
import { ReverseRequest } from "./base/ReverseRequest";
import { ReverseRequestService } from "./reverseRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReverseRequest)
export class ReverseRequestResolver extends ReverseRequestResolverBase {
  constructor(
    protected readonly service: ReverseRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
