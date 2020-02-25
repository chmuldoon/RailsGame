class Api::CommentsController < ApplicationController
  
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      @posts = feed
      render "api/posts/index"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end
  

  def destroy
    @comment = Comment.find_by(author_id: current_user, post_id: params[:id])
    if @comment.destroy
      @posts = feed
      render "api/posts/index"
    else
      render :json, @comment.errors.full_messages, status: 404
    end
  end
  def comment_params
    params.require(:comment).permit(:post_id, :author_id, :content)
  end
end
