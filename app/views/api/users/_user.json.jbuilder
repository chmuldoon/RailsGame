json.extract! user, :id, :username, :name, :email, :bio, :followers, :followings
json.photoUrl url_for(user.photo)
json.hasFollowed user.passive_follows.exists?(follower_id: current_user.id)
