json.extract! user, :id, :username, :name, :email, :bio, :followers, :followings
json.photoUrl url_for(user.photo)
json.hasFollowed user.passive_follows.exists?(follower_id: current_user.id)
json.posts user.posts.reverse() do |post| 
  json.id post.id
  json.photo url_for(post.photo)
  json.likeCount post.comments.length
  json.commentCount post.likes.length
  

end
