class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(target_id: params[:id])
    @follow.follower_id = current_user.id
    if @follow.save
      @user = User.find_by(id: params[:id])
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end
  def destroy
    @follow = Follow.find_by(target_id: params[:id], follower_id: current_user.id)
    if @follow.destroy
      @user = User.find_by(id: params[:id])
      render "api/users/show"
    else
      render :json, @follow.errors.full_messages, status: 404 
    end
  end
end
