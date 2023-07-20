import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { AddCommentInput } from 'src/graphql';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query()
  getPosts() {
    return this.postsService.getPosts();
  }

  @Mutation()
  createPost(@Args('title') title: string, @Args('content') content: string) {}

  @Mutation()
  addComment(@Args('input') {postId,text,user}:AddCommentInput){
    return this.postsService.addComment(postId, text, user);
  }
}
