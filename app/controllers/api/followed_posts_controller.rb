class Api::FollowedPostsController < ApplicationController
  def index
    following = current_user.active_follows.map {|follower| follower.id }
    feed = following + [current_user.id]
    @posts = Post.where('author_id = ?', feed )
    render "api/posts/index"
  end
end
