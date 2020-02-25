class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?
  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end
  def feed
    following = current_user.active_follows.map {|follow| follow.target_id }
    feed = following + [current_user.id]
    Post.where(author_id: feed)
  end
  def generate_hashtags(post_id, hashtags)
    hashtags.each do |hashtag|
      if Hashtag.exists?(content: hashtag)
        newHash = Hashtag.find_by(content: hashtag)
      else
        newHash = Hashtag.new(content: hashtag)
        newHash.save
      end
      post_hashtag = PostHashtag.new(hashtag_id: newHash.id, post_id: post_id)
      post_hashtag.save
    end
  end
end
