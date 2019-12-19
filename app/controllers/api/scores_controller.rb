class Api::ScoresController < ApplicationController
    def create 
    @score = Score.new(score_params)
    @score.player_id = current_user.id
    if @score.save
      render :show
    else
      render json: @score.errors.full_messages, status: 422
    end
  end 

  def index
    @Scores = Score.all
    render :index 
  end 
    def show
    @score = Score.find(params[:id])
    if @score 
      render :show
    else
      render :json, @score.errors.full_messages, status: 404
    end
  end 
  private 
  def user_params
    params.require(:score).permit(:player_id, :score)
  end

end
