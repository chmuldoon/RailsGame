# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Score.destroy_all

jackie = User.create({username: "jackylegs", password: "password",})
butch = User.create({username: "butchthebully", password: "password",})
never = User.create({username: "xX_nvr_stp_me_Xx", password: "password",})

Score.create({player_id: [jackie.id, butch.id, never.id][rand(0..2)], score: rand(100..5000)})
Score.create({player_id: [jackie.id, butch.id, never.id][rand(0..2)], score: rand(100..5000)})
Score.create({player_id: [jackie.id, butch.id, never.id][rand(0..2)], score: rand(100..5000)})
Score.create({player_id: [jackie.id, butch.id, never.id][rand(0..2)], score: rand(100..5000)})
Score.create({player_id: [jackie.id, butch.id, never.id][rand(0..2)], score: rand(100..5000)})
Score.create({player_id: [jackie.id, butch.id, never.id][rand(0..2)], score: rand(100..5000)})
Score.create({player_id: [jackie.id, butch.id, never.id][rand(0..2)], score: rand(100..5000)})
Score.create({player_id: [jackie.id, butch.id, never.id][rand(0..2)], score: rand(100..5000)})



Score.create({player_id: never.id, score: 7999 })





