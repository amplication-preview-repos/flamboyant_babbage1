import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReverseRequestModuleBase } from "./base/reverseRequest.module.base";
import { ReverseRequestService } from "./reverseRequest.service";
import { ReverseRequestController } from "./reverseRequest.controller";
import { ReverseRequestResolver } from "./reverseRequest.resolver";

@Module({
  imports: [ReverseRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReverseRequestController],
  providers: [ReverseRequestService, ReverseRequestResolver],
  exports: [ReverseRequestService],
})
export class ReverseRequestModule {}
