class Api::UserpostsController < ApplicationController
  def show
    @posts = Post.where(author_id: params[:id].to_i)
    render "api/posts/index"
  end
end
