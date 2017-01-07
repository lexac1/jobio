# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'a', email: 'a@a.com', password: 'password')
Category.create(name: 'Resume')
Task.create(name: 'Resume outine', category_id: 1, user_id: 1, complete: false)
Block.create(category_id: 1, due: 'Sat, 19 Nov 2011 18:54:13', user_id: 1)
