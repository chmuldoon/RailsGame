class Api::FetchhashtagController < ApplicationController
  def show
    @hashtag = Hashtag.find(params[:id])
    if @hashtag
      render "api/hashtags/show"
    else
      render json: @hashtag.errors.full_messages, status: 404
    end
  end
end
