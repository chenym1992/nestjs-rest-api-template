import { UserEntity } from 'src/users/entities/user.entity';

import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@prisma/client';

export class ArticleEntity implements Article {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  userId: number | null;

  @ApiProperty({ required: false, type: UserEntity })
  user?: UserEntity;

  constructor({ user, ...data }: Partial<ArticleEntity>) {
    Object.assign(this, data);
    if (user) {
      this.user = new UserEntity(user);
    }
  }
}
