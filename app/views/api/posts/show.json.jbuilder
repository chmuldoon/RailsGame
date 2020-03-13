json.post do
  json.extract! @post, :id, :caption, :author_id
  json.extract! @post.author, :username
  json.photoUrl url_for(@post.photo)
end