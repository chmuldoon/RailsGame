class Api::FeedController < ApplicationController
  def index
    following = current_user.active_follows.map {|follow| follow.target_id }
    feed = following + [current_user.id]
    @posts = Post.where(author_id: feed)
    render "api/posts/index"
  end
  def show
    following = current_user.active_follows.map {|follow| follow.target_id }
    feed = following + [current_user.id]
    @posts = Post.where("author_id NOT IN (?)", feed)
    render "api/posts/index"
  end


end
