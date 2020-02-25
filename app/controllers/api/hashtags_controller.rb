class Api::HashtagsController < ApplicationController
  def show
    tag = Hashtag.find_by(id: params[:id])
    @posts = tag.posts
    render "api/posts/index"
  end
end
