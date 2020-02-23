@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :author_id, :caption, :likes
    json.extract! post.author, :username
    json.profilePic  url_for(post.author.photo)
    json.photoUrl url_for(post.photo)
    json.hasLiked post.likes.exists?(user_id: current_user.id)

    # json.set! :likes do
    #   post.likes.each do |like|
    #     json.set! like.id do
    #       json.extract! like, :author_id, 
    #       json.username like, like.author.username
    #       json.pfp url_for(like.author.photo)
    #     end
    #   end
    # end
  end
  
end
