import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // 영어와 숫자만 가능하도록 정규표현식 작성
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number'
  })
  password: string;
}