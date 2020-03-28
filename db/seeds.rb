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

name1 = Faker::Name.male_first_name 
user1 = User.create({name: name1, username:  Faker::Internet.username(specifier: name1), email: Faker::Internet.free_email(name: name1), password: "password", bio: Faker::Quote.famous_last_words } )
user1.photo.attach(io: open("#{Rails.root}/app/assets/images/user1.png"), filename: 'user1.png')

name2 = Faker::Name.male_first_name 
user2 = User.create({name: name2, username:  Faker::Internet.username(specifier: name2), email: Faker::Internet.free_email(name: name2), password: "password", bio: Faker::Quote.famous_last_words } )
user2.photo.attach(io: open("#{Rails.root}/app/assets/images/user2.png"), filename: 'user2.png')

name3 = Faker::Name.female_first_name 
user3 = User.create({name: name3, username:  Faker::Internet.username(specifier: name3), email: Faker::Internet.free_email(name: name3), password: "password", bio: Faker::Quote.famous_last_words } )
user3.photo.attach(io: open("#{Rails.root}/app/assets/images/user3.png"), filename: 'user3.png')

name4 = Faker::Name.male_first_name 
user4 = User.create({name: name4, username:  Faker::Internet.username(specifier: name4), email: Faker::Internet.free_email(name: name4), password: "password", bio: Faker::Quote.famous_last_words } )
user4.photo.attach(io: open("#{Rails.root}/app/assets/images/user4.png"), filename: 'user4.png')

name5 = Faker::Name.male_first_name 
user5 = User.create({name: name5, username:  Faker::Internet.username(specifier: name5), email: Faker::Internet.free_email(name: name5), password: "password", bio: Faker::Quote.famous_last_words } )
user5.photo.attach(io: open("#{Rails.root}/app/assets/images/user5.png"), filename: 'user5.png')

name6 = Faker::Name.male_first_name 
user6 = User.create({name: name6, username:  Faker::Internet.username(specifier: name6), email: Faker::Internet.free_email(name: name6), password: "password", bio: Faker::Quote.famous_last_words } )
user6.photo.attach(io: open("#{Rails.root}/app/assets/images/user6.png"), filename: 'user6.png')

name7 = Faker::Name.male_first_name 
user7 = User.create({name: name7, username:  Faker::Internet.username(specifier: name7), email: Faker::Internet.free_email(name: name7), password: "password", bio: Faker::Quote.famous_last_words } )
user7.photo.attach(io: open("#{Rails.root}/app/assets/images/user7.png"), filename: 'user7.png')

name8 = Faker::Name.male_first_name 
user8 = User.create({name: name8, username:  Faker::Internet.username(specifier: name8), email: Faker::Internet.free_email(name: name8), password: "password", bio: Faker::Quote.famous_last_words } )
user8.photo.attach(io: open("#{Rails.root}/app/assets/images/user8.png"), filename: 'user8.png')

name9 = Faker::Name.female_first_name 
user9 = User.create({name: name9, username:  Faker::Internet.username(specifier: name9), email: Faker::Internet.free_email(name: name9), password: "password", bio: Faker::Quote.famous_last_words } )
user9.photo.attach(io: open("#{Rails.root}/app/assets/images/user9.png"), filename: 'user9.png')

name10 = Faker::Name.female_first_name 
user10 = User.create({name: name10, username:  Faker::Internet.username(specifier: name10), email: Faker::Internet.free_email(name: name10), password: "password", bio: Faker::Quote.famous_last_words } )
user10.photo.attach(io: open("#{Rails.root}/app/assets/images/user10.png"), filename: 'user10.png')



#posts
quotes = ["wow", "really loving this app!", "Saturday vibes", "weekend", "Look at this!", "just took this the other day", "totally not a preseeded caption", "Clonestagram is such an original and novel idea", "Anyone have any good ideas for a caption?"]
hashtags =["#clonestagram", "#cool", "#nice", "#picoftheday"]
hashtags.each do |hashtag| 
  Hashtag.create({content: hashtag})
end

#user1 posts
user1post1hashtag = hashtags.sample()
user1post1 = Post.create({author_id: user1.id, caption:  "#{quotes.sample()} #{user1post1hashtag}"})
PostHashtag.create({post_id: user1post1.id, hashtag_id: Hashtag.find_by(content: user1post1hashtag).id})
user1post1.photo.attach(io: open("#{Rails.root}/app/assets/images/user1/pic1.jpg"), filename: 'pic1.jpg')

user1post2hashtag = hashtags.sample()
user1post2 = Post.create({author_id: user1.id, caption:  "#{quotes.sample()} #{user1post2hashtag}"})
PostHashtag.create({post_id: user1post2.id, hashtag_id: Hashtag.find_by(content: user1post2hashtag).id})
user1post2.photo.attach(io: open("#{Rails.root}/app/assets/images/user1/pic2.jpg"), filename: 'pic2.jpg')

user1post3hashtag = hashtags.sample()
user1post3 = Post.create({author_id: user1.id, caption:  "#{quotes.sample()} #{user1post3hashtag}"})
PostHashtag.create({post_id: user1post3.id, hashtag_id: Hashtag.find_by(content: user1post3hashtag).id})
user1post3.photo.attach(io: open("#{Rails.root}/app/assets/images/user1/pic3.jpg"), filename: 'pic3.jpg')

user1post4hashtag = hashtags.sample()
user1post4 = Post.create({author_id: user1.id, caption:  "#{quotes.sample()} #{user1post4hashtag}"})
PostHashtag.create({post_id: user1post4.id, hashtag_id: Hashtag.find_by(content: user1post4hashtag).id})
user1post4.photo.attach(io: open("#{Rails.root}/app/assets/images/user1/pic4.jpg"), filename: 'pic4.jpg')

user1post5hashtag = hashtags.sample()
user1post5 = Post.create({author_id: user1.id, caption:  "#{quotes.sample()} #{user1post5hashtag}"})
PostHashtag.create({post_id: user1post5.id, hashtag_id: Hashtag.find_by(content: user1post5hashtag).id})
user1post5.photo.attach(io: open("#{Rails.root}/app/assets/images/user1/pic5.jpg"), filename: 'pic5.jpg')

user1post6hashtag = hashtags.sample()
user1post6 = Post.create({author_id: user1.id, caption:  "#{quotes.sample()} #{user1post6hashtag}"})
PostHashtag.create({post_id: user1post6.id, hashtag_id: Hashtag.find_by(content: user1post6hashtag).id})
user1post6.photo.attach(io: open("#{Rails.root}/app/assets/images/user1/pic6.jpg"), filename: 'pic6.jpg')

#user2

user2post1hashtag = hashtags.sample()
user2post1 = Post.create({author_id: user2.id, caption:  "#{quotes.sample()} #{user2post1hashtag}"})
PostHashtag.create({post_id: user2post1.id, hashtag_id: Hashtag.find_by(content: user2post1hashtag).id})
user2post1.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic1.jpg"), filename: 'pic1.jpg')

user2post2hashtag = hashtags.sample()
user2post2 = Post.create({author_id: user2.id, caption:  "#{quotes.sample()} #{user2post2hashtag}"})
PostHashtag.create({post_id: user2post2.id, hashtag_id: Hashtag.find_by(content: user2post2hashtag).id})
user2post2.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic2.jpg"), filename: 'pic2.jpg')

user2post3hashtag = hashtags.sample()
user2post3 = Post.create({author_id: user2.id, caption:  "#{quotes.sample()} #{user2post3hashtag}"})
PostHashtag.create({post_id: user2post3.id, hashtag_id: Hashtag.find_by(content: user2post3hashtag).id})
user2post3.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic3.jpg"), filename: 'pic3.jpg')

user2post4hashtag = hashtags.sample()
user2post4 = Post.create({author_id: user2.id, caption:  "#{quotes.sample()} #{user2post4hashtag}"})
PostHashtag.create({post_id: user2post4.id, hashtag_id: Hashtag.find_by(content: user2post4hashtag).id})
user2post4.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic4.jpg"), filename: 'pic4.jpg')

user2post5hashtag = hashtags.sample()
user2post5 = Post.create({author_id: user2.id, caption:  "#{quotes.sample()} #{user2post5hashtag}"})
PostHashtag.create({post_id: user2post5.id, hashtag_id: Hashtag.find_by(content: user2post5hashtag).id})
user2post5.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic5.jpg"), filename: 'pic5.jpg')

user2post6hashtag = hashtags.sample()
user2post6 = Post.create({author_id: user2.id, caption:  "#{quotes.sample()} #{user2post6hashtag}"})
PostHashtag.create({post_id: user2post6.id, hashtag_id: Hashtag.find_by(content: user2post6hashtag).id})
user2post6.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic6.jpg"), filename: 'pic6.jpg')

user2post7hashtag = hashtags.sample()
user2post7 = Post.create({author_id: user2.id, caption:  "#{quotes.sample()} #{user2post7hashtag}"})
PostHashtag.create({post_id: user2post7.id, hashtag_id: Hashtag.find_by(content: user2post7hashtag).id})
user2post7.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic7.jpg"), filename: 'pic7.jpg')

#user3

user3post1hashtag = hashtags.sample()
user3post1 = Post.create({author_id: user3.id, caption:  "#{quotes.sample()} #{user3post1hashtag}"})
PostHashtag.create({post_id: user3post1.id, hashtag_id: Hashtag.find_by(content: user3post1hashtag).id})
user3post1.photo.attach(io: open("#{Rails.root}/app/assets/images/user3/pic1.jpg"), filename: 'pic1.jpg')

user3post2hashtag = hashtags.sample()
user3post2 = Post.create({author_id: user3.id, caption:  "#{quotes.sample()} #{user3post2hashtag}"})
PostHashtag.create({post_id: user3post2.id, hashtag_id: Hashtag.find_by(content: user3post2hashtag).id})
user3post2.photo.attach(io: open("#{Rails.root}/app/assets/images/user3/pic2.jpg"), filename: 'pic2.jpg')

user3post3hashtag = hashtags.sample()
user3post3 = Post.create({author_id: user3.id, caption:  "#{quotes.sample()} #{user3post3hashtag}"})
PostHashtag.create({post_id: user3post3.id, hashtag_id: Hashtag.find_by(content: user3post3hashtag).id})
user3post3.photo.attach(io: open("#{Rails.root}/app/assets/images/user3/pic3.jpg"), filename: 'pic3.jpg')

user3post4hashtag = hashtags.sample()
user3post4 = Post.create({author_id: user3.id, caption:  "#{quotes.sample()} #{user3post4hashtag}"})
PostHashtag.create({post_id: user3post4.id, hashtag_id: Hashtag.find_by(content: user3post4hashtag).id})
user3post4.photo.attach(io: open("#{Rails.root}/app/assets/images/user3/pic4.jpg"), filename: 'pic4.jpg')

user3post5hashtag = hashtags.sample()
user3post5 = Post.create({author_id: user3.id, caption:  "#{quotes.sample()} #{user3post5hashtag}"})
PostHashtag.create({post_id: user3post5.id, hashtag_id: Hashtag.find_by(content: user3post5hashtag).id})
user3post5.photo.attach(io: open("#{Rails.root}/app/assets/images/user3/pic5.jpg"), filename: 'pic5.jpg')

#user4

user4post1hashtag = hashtags.sample()
user4post1 = Post.create({author_id: user4.id, caption:  "#{quotes.sample()} #{user4post1hashtag}"})
PostHashtag.create({post_id: user4post1.id, hashtag_id: Hashtag.find_by(content: user4post1hashtag).id})
user4post1.photo.attach(io: open("#{Rails.root}/app/assets/images/user4/pic1.jpg"), filename: 'pic1.jpg')

user4post2hashtag = hashtags.sample()
user4post2 = Post.create({author_id: user4.id, caption:  "#{quotes.sample()} #{user4post2hashtag}"})
PostHashtag.create({post_id: user4post2.id, hashtag_id: Hashtag.find_by(content: user4post2hashtag).id})
user4post2.photo.attach(io: open("#{Rails.root}/app/assets/images/user4/pic2.jpg"), filename: 'pic2.jpg')

user4post3hashtag = hashtags.sample()
user4post3 = Post.create({author_id: user4.id, caption:  "#{quotes.sample()} #{user4post3hashtag}"})
PostHashtag.create({post_id: user4post3.id, hashtag_id: Hashtag.find_by(content: user4post3hashtag).id})
user4post3.photo.attach(io: open("#{Rails.root}/app/assets/images/user4/pic3.jpg"), filename: 'pic3.jpg')

user4post4hashtag = hashtags.sample()
user4post4 = Post.create({author_id: user4.id, caption:  "#{quotes.sample()} #{user4post4hashtag}"})
PostHashtag.create({post_id: user4post4.id, hashtag_id: Hashtag.find_by(content: user4post4hashtag).id})
user4post4.photo.attach(io: open("#{Rails.root}/app/assets/images/user4/pic4.jpg"), filename: 'pic4.jpg')

user4post5hashtag = hashtags.sample()
user4post5 = Post.create({author_id: user4.id, caption:  "#{quotes.sample()} #{user4post5hashtag}"})
PostHashtag.create({post_id: user4post5.id, hashtag_id: Hashtag.find_by(content: user4post5hashtag).id})
user4post5.photo.attach(io: open("#{Rails.root}/app/assets/images/user3/pic5.jpg"), filename: 'pic5.jpg')

user4post6hashtag = hashtags.sample()
user4post6 = Post.create({author_id: user4.id, caption:  "#{quotes.sample()} #{user4post6hashtag}"})
PostHashtag.create({post_id: user4post6.id, hashtag_id: Hashtag.find_by(content: user4post6hashtag).id})
user4post6.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic6.jpg"), filename: 'pic6.jpg')

#user5
user5post1hashtag = hashtags.sample()
user5post1 = Post.create({author_id: user5.id, caption:  "#{quotes.sample()} #{user5post1hashtag}"})
PostHashtag.create({post_id: user5post1.id, hashtag_id: Hashtag.find_by(content: user5post1hashtag).id})
user5post1.photo.attach(io: open("#{Rails.root}/app/assets/images/user5/pic1.jpg"), filename: 'pic1.jpg')

user5post2hashtag = hashtags.sample()
user5post2 = Post.create({author_id: user5.id, caption:  "#{quotes.sample()} #{user5post2hashtag}"})
PostHashtag.create({post_id: user5post2.id, hashtag_id: Hashtag.find_by(content: user5post2hashtag).id})
user5post2.photo.attach(io: open("#{Rails.root}/app/assets/images/user5/pic2.jpg"), filename: 'pic2.jpg')

user5post3hashtag = hashtags.sample()
user5post3 = Post.create({author_id: user5.id, caption:  "#{quotes.sample()} #{user5post3hashtag}"})
PostHashtag.create({post_id: user5post3.id, hashtag_id: Hashtag.find_by(content: user5post3hashtag).id})
user5post3.photo.attach(io: open("#{Rails.root}/app/assets/images/user5/pic3.jpg"), filename: 'pic3.jpg')

user5post4hashtag = hashtags.sample()
user5post4 = Post.create({author_id: user5.id, caption:  "#{quotes.sample()} #{user5post4hashtag}"})
PostHashtag.create({post_id: user5post4.id, hashtag_id: Hashtag.find_by(content: user5post4hashtag).id})
user5post4.photo.attach(io: open("#{Rails.root}/app/assets/images/user5/pic4.jpg"), filename: 'pic4.jpg')

user5post5hashtag = hashtags.sample()
user5post5 = Post.create({author_id: user5.id, caption:  "#{quotes.sample()} #{user5post5hashtag}"})
PostHashtag.create({post_id: user5post5.id, hashtag_id: Hashtag.find_by(content: user5post5hashtag).id})
user5post5.photo.attach(io: open("#{Rails.root}/app/assets/images/user5/pic5.jpg"), filename: 'pic5.jpg')

user5post6hashtag = hashtags.sample()
user5post6 = Post.create({author_id: user5.id, caption:  "#{quotes.sample()} #{user5post6hashtag}"})
PostHashtag.create({post_id: user5post6.id, hashtag_id: Hashtag.find_by(content: user5post6hashtag).id})
user5post6.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic6.jpg"), filename: 'pic6.jpg')

#user6
user6post1hashtag = hashtags.sample()
user6post1 = Post.create({author_id: user6.id, caption:  "#{quotes.sample()} #{user6post1hashtag}"})
PostHashtag.create({post_id: user6post1.id, hashtag_id: Hashtag.find_by(content: user6post1hashtag).id})
user6post1.photo.attach(io: open("#{Rails.root}/app/assets/images/user6/pic1.jpg"), filename: 'pic1.jpg')

user6post2hashtag = hashtags.sample()
user6post2 = Post.create({author_id: user6.id, caption:  "#{quotes.sample()} #{user6post2hashtag}"})
PostHashtag.create({post_id: user6post2.id, hashtag_id: Hashtag.find_by(content: user6post2hashtag).id})
user6post2.photo.attach(io: open("#{Rails.root}/app/assets/images/user6/pic2.jpg"), filename: 'pic2.jpg')

user6post3hashtag = hashtags.sample()
user6post3 = Post.create({author_id: user6.id, caption:  "#{quotes.sample()} #{user6post3hashtag}"})
PostHashtag.create({post_id: user6post3.id, hashtag_id: Hashtag.find_by(content: user6post3hashtag).id})
user6post3.photo.attach(io: open("#{Rails.root}/app/assets/images/user6/pic3.jpg"), filename: 'pic3.jpg')

user6post4hashtag = hashtags.sample()
user6post4 = Post.create({author_id: user6.id, caption:  "#{quotes.sample()} #{user6post4hashtag}"})
PostHashtag.create({post_id: user6post4.id, hashtag_id: Hashtag.find_by(content: user6post4hashtag).id})
user6post4.photo.attach(io: open("#{Rails.root}/app/assets/images/user5/pic4.jpg"), filename: 'pic4.jpg')

#user7
user7post1hashtag = hashtags.sample()
user7post1 = Post.create({author_id: user7.id, caption:  "#{quotes.sample()} #{user7post1hashtag}"})
PostHashtag.create({post_id: user7post1.id, hashtag_id: Hashtag.find_by(content: user7post1hashtag).id})
user7post1.photo.attach(io: open("#{Rails.root}/app/assets/images/user7/pic1.jpg"), filename: 'pic1.jpg')

user7post2hashtag = hashtags.sample()
user7post2 = Post.create({author_id: user7.id, caption:  "#{quotes.sample()} #{user7post2hashtag}"})
PostHashtag.create({post_id: user7post2.id, hashtag_id: Hashtag.find_by(content: user7post2hashtag).id})
user7post2.photo.attach(io: open("#{Rails.root}/app/assets/images/user7/pic2.jpg"), filename: 'pic2.jpg')

user7post3hashtag = hashtags.sample()
user7post3 = Post.create({author_id: user7.id, caption:  "#{quotes.sample()} #{user7post3hashtag}"})
PostHashtag.create({post_id: user7post3.id, hashtag_id: Hashtag.find_by(content: user7post3hashtag).id})
user7post3.photo.attach(io: open("#{Rails.root}/app/assets/images/user7/pic3.jpg"), filename: 'pic3.jpg')

user7post4hashtag = hashtags.sample()
user7post4 = Post.create({author_id: user7.id, caption:  "#{quotes.sample()} #{user7post4hashtag}"})
PostHashtag.create({post_id: user7post4.id, hashtag_id: Hashtag.find_by(content: user7post4hashtag).id})
user7post4.photo.attach(io: open("#{Rails.root}/app/assets/images/user7/pic4.jpg"), filename: 'pic4.jpg')

user7post5hashtag = hashtags.sample()
user7post5 = Post.create({author_id: user7.id, caption:  "#{quotes.sample()} #{user7post5hashtag}"})
PostHashtag.create({post_id: user7post5.id, hashtag_id: Hashtag.find_by(content: user7post5hashtag).id})
user7post5.photo.attach(io: open("#{Rails.root}/app/assets/images/user7/pic5.jpg"), filename: 'pic5.jpg')

user7post6hashtag = hashtags.sample()
user7post6 = Post.create({author_id: user7.id, caption:  "#{quotes.sample()} #{user7post6hashtag}"})
PostHashtag.create({post_id: user7post6.id, hashtag_id: Hashtag.find_by(content: user7post6hashtag).id})
user7post6.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic6.jpg"), filename: 'pic6.jpg')

#user8

user8post1hashtag = hashtags.sample()
user8post1 = Post.create({author_id: user8.id, caption:  "#{quotes.sample()} #{user8post1hashtag}"})
PostHashtag.create({post_id: user8post1.id, hashtag_id: Hashtag.find_by(content: user8post1hashtag).id})
user8post1.photo.attach(io: open("#{Rails.root}/app/assets/images/user8/pic1.jpg"), filename: 'pic1.jpg')

user8post2hashtag = hashtags.sample()
user8post2 = Post.create({author_id: user8.id, caption:  "#{quotes.sample()} #{user8post2hashtag}"})
PostHashtag.create({post_id: user8post2.id, hashtag_id: Hashtag.find_by(content: user8post2hashtag).id})
user8post2.photo.attach(io: open("#{Rails.root}/app/assets/images/user8/pic2.jpg"), filename: 'pic2.jpg')

user8post3hashtag = hashtags.sample()
user8post3 = Post.create({author_id: user8.id, caption:  "#{quotes.sample()} #{user8post3hashtag}"})
PostHashtag.create({post_id: user8post3.id, hashtag_id: Hashtag.find_by(content: user8post3hashtag).id})
user8post3.photo.attach(io: open("#{Rails.root}/app/assets/images/user8/pic3.jpg"), filename: 'pic3.jpg')

user8post4hashtag = hashtags.sample()
user8post4 = Post.create({author_id: user8.id, caption:  "#{quotes.sample()} #{user8post4hashtag}"})
PostHashtag.create({post_id: user8post4.id, hashtag_id: Hashtag.find_by(content: user8post4hashtag).id})
user8post4.photo.attach(io: open("#{Rails.root}/app/assets/images/user8/pic4.jpg"), filename: 'pic4.jpg')

user8post5hashtag = hashtags.sample()
user8post5 = Post.create({author_id: user8.id, caption:  "#{quotes.sample()} #{user8post5hashtag}"})
PostHashtag.create({post_id: user8post5.id, hashtag_id: Hashtag.find_by(content: user8post5hashtag).id})
user8post5.photo.attach(io: open("#{Rails.root}/app/assets/images/user8/pic5.jpg"), filename: 'pic5.jpg')

user8post6hashtag = hashtags.sample()
user8post6 = Post.create({author_id: user8.id, caption:  "#{quotes.sample()} #{user8post6hashtag}"})
PostHashtag.create({post_id: user8post6.id, hashtag_id: Hashtag.find_by(content: user8post6hashtag).id})
user8post6.photo.attach(io: open("#{Rails.root}/app/assets/images/user8/pic6.jpg"), filename: 'pic6.jpg')

user8post7hashtag = hashtags.sample()
user8post7 = Post.create({author_id: user8.id, caption:  "#{quotes.sample()} #{user8post7hashtag}"})
PostHashtag.create({post_id: user8post7.id, hashtag_id: Hashtag.find_by(content: user8post7hashtag).id})
user8post7.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic7.jpg"), filename: 'pic7.jpg')

user8post8hashtag = hashtags.sample()
user8post8 = Post.create({author_id: user8.id, caption:  "#{quotes.sample()} #{user8post8hashtag}"})
PostHashtag.create({post_id: user8post8.id, hashtag_id: Hashtag.find_by(content: user8post8hashtag).id})
user8post8.photo.attach(io: open("#{Rails.root}/app/assets/images/user8/pic8.jpg"), filename: 'pic8.jpg')

#user9

user9post1hashtag = hashtags.sample()
user9post1 = Post.create({author_id: user9.id, caption:  "#{quotes.sample()} #{user9post1hashtag}"})
PostHashtag.create({post_id: user9post1.id, hashtag_id: Hashtag.find_by(content: user9post1hashtag).id})
user9post1.photo.attach(io: open("#{Rails.root}/app/assets/images/user9/pic1.jpg"), filename: 'pic1.jpg')

user9post2hashtag = hashtags.sample()
user9post2 = Post.create({author_id: user9.id, caption:  "#{quotes.sample()} #{user9post2hashtag}"})
PostHashtag.create({post_id: user9post2.id, hashtag_id: Hashtag.find_by(content: user9post2hashtag).id})
user9post2.photo.attach(io: open("#{Rails.root}/app/assets/images/user9/pic2.jpg"), filename: 'pic2.jpg')

user9post3hashtag = hashtags.sample()
user9post3 = Post.create({author_id: user9.id, caption:  "#{quotes.sample()} #{user9post3hashtag}"})
PostHashtag.create({post_id: user9post3.id, hashtag_id: Hashtag.find_by(content: user9post3hashtag).id})
user9post3.photo.attach(io: open("#{Rails.root}/app/assets/images/user9/pic3.jpg"), filename: 'pic3.jpg')

user9post4hashtag = hashtags.sample()
user9post4 = Post.create({author_id: user9.id, caption:  "#{quotes.sample()} #{user9post4hashtag}"})
PostHashtag.create({post_id: user9post4.id, hashtag_id: Hashtag.find_by(content: user9post4hashtag).id})
user9post4.photo.attach(io: open("#{Rails.root}/app/assets/images/user9/pic4.jpg"), filename: 'pic4.jpg')

user9post5hashtag = hashtags.sample()
user9post5 = Post.create({author_id: user9.id, caption:  "#{quotes.sample()} #{user9post5hashtag}"})
PostHashtag.create({post_id: user9post5.id, hashtag_id: Hashtag.find_by(content: user9post5hashtag).id})
user9post5.photo.attach(io: open("#{Rails.root}/app/assets/images/user9/pic5.jpg"), filename: 'pic5.jpg')

user9post6hashtag = hashtags.sample()
user9post6 = Post.create({author_id: user9.id, caption:  "#{quotes.sample()} #{user9post6hashtag}"})
PostHashtag.create({post_id: user9post6.id, hashtag_id: Hashtag.find_by(content: user9post6hashtag).id})
user9post6.photo.attach(io: open("#{Rails.root}/app/assets/images/user8/pic6.jpg"), filename: 'pic6.jpg')

#user10

user10post1hashtag = hashtags.sample()
user10post1 = Post.create({author_id: user10.id, caption:  "#{quotes.sample()} #{user10post1hashtag}"})
PostHashtag.create({post_id: user10post1.id, hashtag_id: Hashtag.find_by(content: user10post1hashtag).id})
user10post1.photo.attach(io: open("#{Rails.root}/app/assets/images/user10/pic1.jpg"), filename: 'pic1.jpg')

user10post2hashtag = hashtags.sample()
user10post2 = Post.create({author_id: user10.id, caption:  "#{quotes.sample()} #{user10post2hashtag}"})
PostHashtag.create({post_id: user10post2.id, hashtag_id: Hashtag.find_by(content: user10post2hashtag).id})
user10post2.photo.attach(io: open("#{Rails.root}/app/assets/images/user10/pic2.jpg"), filename: 'pic2.jpg')

user10post3hashtag = hashtags.sample()
user10post3 = Post.create({author_id: user10.id, caption:  "#{quotes.sample()} #{user10post3hashtag}"})
PostHashtag.create({post_id: user10post3.id, hashtag_id: Hashtag.find_by(content: user10post3hashtag).id})
user10post3.photo.attach(io: open("#{Rails.root}/app/assets/images/user10/pic3.jpg"), filename: 'pic3.jpg')

user10post4hashtag = hashtags.sample()
user10post4 = Post.create({author_id: user10.id, caption:  "#{quotes.sample()} #{user10post4hashtag}"})
PostHashtag.create({post_id: user10post4.id, hashtag_id: Hashtag.find_by(content: user10post4hashtag).id})
user10post4.photo.attach(io: open("#{Rails.root}/app/assets/images/user10/pic4.jpg"), filename: 'pic4.jpg')

user10post5hashtag = hashtags.sample()
user10post5 = Post.create({author_id: user10.id, caption:  "#{quotes.sample()} #{user10post5hashtag}"})
PostHashtag.create({post_id: user10post5.id, hashtag_id: Hashtag.find_by(content: user10post5hashtag).id})
user10post5.photo.attach(io: open("#{Rails.root}/app/assets/images/user10/pic5.jpg"), filename: 'pic5.jpg')

user10post6hashtag = hashtags.sample()
user10post6 = Post.create({author_id: user10.id, caption:  "#{quotes.sample()} #{user10post6hashtag}"})
PostHashtag.create({post_id: user10post6.id, hashtag_id: Hashtag.find_by(content: user10post6hashtag).id})
user10post6.photo.attach(io: open("#{Rails.root}/app/assets/images/user10/pic6.jpg"), filename: 'pic6.jpg')

user10post7hashtag = hashtags.sample()
user10post7 = Post.create({author_id: user10.id, caption:  "#{quotes.sample()} #{user10post7hashtag}"})
PostHashtag.create({post_id: user10post7.id, hashtag_id: Hashtag.find_by(content: user10post7hashtag).id})
user10post7.photo.attach(io: open("#{Rails.root}/app/assets/images/user2/pic7.jpg"), filename: 'pic7.jpg')








#likes
