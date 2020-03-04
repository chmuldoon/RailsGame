class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(target_id: params[:id])
    @users = User.all
    @follow.follower_id = current_user.id
    if @follow.save
      # @user = User.find_by(id: params[:id])
      render "api/users/index"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end
  def destroy
    @users = User.all
    if(params[:id].to_i == current_user.id)
      render "api/users/index"
    end
    @follow = Follow.find_by(target_id: params[:id], follower_id: current_user.id)
    if @follow.destroy
      # @user = User.find_by(id: params[:id])
      render "api/users/index"
    else
      render :json, @follow.errors.full_messages, status: 404 
    end
  end
end
