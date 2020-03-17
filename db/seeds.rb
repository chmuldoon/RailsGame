# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all
Like.destroy_all
PostHashtag.destroy_all
Post.destroy_all
Hashtag.destroy_all
User.destroy_all
demouser = User.create({username: "DemoUser", name: "Demo User", password: "DemoUser", email: "demo@user.com", bio: "I'm just a demo user"})
demophoto = open("#{Rails.root}/app/assets/images/icon.jpg")
demouser.photo.attach(io: demophoto, filename: 'icon.jpg')




