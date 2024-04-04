import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../boards.model";

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [
    BoardStatus.PUBLIC,
    BoardStatus.PRIVATE
  ]

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      return new BadRequestException(`${value} is not in the Status Options`);
    }

    console.log('value', value);
    console.log('metadata', metadata);

    return value;
  }

  private isStatusValid(status: any) {
    return this.StatusOptions.includes(status);
  }
}