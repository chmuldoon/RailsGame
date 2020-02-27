json.post do
  json.extract! @post, :id, :caption, :author_id
  json.extract! @post.author, :username
  json.photoUrl url_for(@post.photo)
  json.profilePic  url_for(@post.author.photo)
  json.photoUrl url_for(@post.photo)
  json.hasLiked @post.likes.exists?(user_id: current_user.id)
  json.comments @post.comments do |comment|
    json.id comment, :id
    json.extract! comment, :content
    json.extract! comment.author, :username
    json.photo url_for(comment.author.photo)
  end
  json.hashtags @post.hashtags
end