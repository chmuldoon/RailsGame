class Api::Posts::LikesController < ApplicationController
  def create 
    debugger
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end
  # def update
  #   @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
  #   if @like
  #     if @like.destroy
  #       render :show
  #     else
  #       render :json, @like.errors.full_messages, status: 404
  #     end
  #   else
  #     @like = Like.new(like_params)
  #   @like.user_id = current_user.id
  #   if @like.save
  #     render :show
  #   else
  #     render json: @like.errors.full_messages, status: 422
  #   end
  #   end

  # end

  def destroy 
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
    # @like = Like.where(user_id: current_user.id).where(post_id: params[:id])[0]
    if @like.destroy
      render :show
    else
      render :json, @like.errors.full_messages, status: 404
    end
  end 
  private
  def like_params
    params.require(:like).permit(:post_id, :user_id)
  end
end
