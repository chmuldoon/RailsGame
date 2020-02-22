@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :name, :bio
    json.photoUrl url_for(user.photo)

    
  end
end