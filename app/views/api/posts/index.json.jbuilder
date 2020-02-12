@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :author_id, :caption
    json.extract! post.author, :username
    json.photoUrl url_for(post.photo)
  end
end