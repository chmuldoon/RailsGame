class Api::CommentsController < ApplicationController
  
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      if params[:kind] == "indexitem"
        @posts = feed
        render "api/posts/index"
      elsif params[:kind] == "explore"
        @posts = explore
        render "api/posts/index"
      elsif params[:kind][0..6] == "hashtag"
        post_ids = Hashtag.find_by(id: params[:kind][7..-1].to_i).posts.map { |post| post.id }
        @posts = Post.where(id: post_ids)
        render "api/posts/index"
      else
        @posts = Post.where(author_id: params[:kind].to_i)
        render "api/posts/index"
      end
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end
  

  def destroy
    @comment = Comment.find_by(author_id: current_user, post_id: params[:id])
    if @comment.destroy
      if params[:kind] == "indexitem"
        @posts = feed
        render "api/posts/index"
      elsif params[:kind] == "explore"
        @posts = explore
        render "api/posts/index"
      elsif params[:kind][0..6] == "hashtag"
        post_ids = Hashtag.find_by(id: params[:kind][7..-1].to_i).posts.map { |post| post.id }
        @posts = Post.where(id: post_ids)
        render "api/posts/index"
      else
        @posts = Post.where(author_id: params[:kind].to_i)
        render "api/posts/index"
      end
    else
      render :json, @comment.errors.full_messages, status: 404
    end
  end
  def comment_params
    params.require(:comment).permit(:post_id, :author_id, :content)
  end
end
