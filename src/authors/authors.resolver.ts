import { ResolveField, Query, Resolver, Args, Parent } from '@nestjs/graphql';

@Resolver('Author')
export class AuthorsResolver {
  // constructor(
  //   private authorsService: AuthorsService,
  //   private postsService: PostsService,
  // ) {}

  @Query('author')
  async author(@Args('id') id: number) {
    return {
      id: 1,
      firstName: 'kim2',
      lastName: 'jihun',
    };
  }

  @ResolveField('posts')
  async posts(@Parent() author) {
    console.log(author);
    const { id } = author;
    return {
      id: 1,
      title: 'nest',
      votes: 2,
    };
  }
}
