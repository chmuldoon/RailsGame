json.extract! user, :id, :username, :name, :bio
json.photoUrl url_for(user.photo)
