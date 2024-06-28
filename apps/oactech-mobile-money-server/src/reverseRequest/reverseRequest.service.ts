import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReverseRequestServiceBase } from "./base/reverseRequest.service.base";

@Injectable()
export class ReverseRequestService extends ReverseRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
