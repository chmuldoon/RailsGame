json.extract! user, :id, :username, :name, :bio, :followers, :followings
json.photoUrl url_for(user.photo)
json.hasFollowed user.passive_follows.exists?(follower_id: current_user.id)

# json.followers do
#   user.followers.each do |follower|
#     json.set! follower.id do
#       json.extract! follower, :id, :username, 
#       json.pic url_for(follower.photo)
#     end
#   end
# end
# json.followings do
#   user.followings.each do |follower|
#     json.set! follower.id do
#       json.extract! follower, :id, :username, 
#       json.pic url_for(follower.photo)
#     end
#   end
# end
