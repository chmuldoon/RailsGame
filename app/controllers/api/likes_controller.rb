class Api::LikesController < ApplicationController
    def create 
    @like = Like.new(post_id: params[:post_id].to_i)
    @like.user_id = current_user.id
    if @like.save
      @posts = feed
      render "api/posts/index"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end


  def destroy 
    # debugger
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])

    # @like = Like.where(user_id: current_user.id).where(post_id: params[:id])[0]
    # debugger
    if @like.destroy
      following = current_user.active_follows.map {|follow| follow.target_id }
      feed = following + [current_user.id]
      @posts = Post.where(author_id: feed)
      render "api/posts/index"
    else
      render :json, @like.errors.full_messages, status: 404
    end
  end 
  # def like_params
  #   params.require(:like).permit(:post_id, :user_id)
  # end
end
