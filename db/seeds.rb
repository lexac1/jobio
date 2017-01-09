# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'a', email: 'a@a.com', password: 'password')
User.create(username: 'lex', email: 'lex.ac1@gmail.com', password: 'password')

Category.create(name: 'Resume')
Category.create(name: 'Projects')
Category.create(name: 'Outreach')
Category.create(name: 'Web Presence')
Category.create(name: 'Drills')

Task.create(name: 'Outline', category_id: 1, user_id: 1, complete: false, priority: 1)
Task.create(name: 'Second Task', category_id: 2, user_id: 2, complete: false, priority: 2)
Task.create(name: 'Outline', category_id: 1, user_id: 1, complete: false, priority: 1)
Task.create(name: 'More Tasks', category_id: 1, user_id: 2, complete: false, priority: 2)

Block.create(category_id: 1, due: 'Sat, 19 Nov 2011 18:54:13', order: 1, user_id: 1)
Block.create(category_id: 2, due: 'Sat, 19 Nov 2011 18:54:13', order: 2, user_id: 1)
Block.create(category_id: 3, due: 'Sat, 19 Nov 2011 18:54:13', order: 3, user_id: 1)
Block.create(category_id: 4, due: 'Sat, 19 Nov 2011 18:54:13', order: 4, user_id: 1)
Block.create(category_id: 5, due: 'Sat, 19 Nov 2011 18:54:13', order: 5, user_id: 1)


Block.create(category_id: 1, due: 'Sat, 19 Nov 2011 18:54:13', order: 1, user_id: 2)
Block.create(category_id: 2, due: 'Sat, 19 Nov 2011 18:54:13', order: 2, user_id: 2)
Block.create(category_id: 3, due: 'Sat, 19 Nov 2011 18:54:13', order: 3, user_id: 2)
Block.create(category_id: 4, due: 'Sat, 19 Nov 2011 18:54:13', order: 4, user_id: 2)
Block.create(category_id: 5, due: 'Sat, 19 Nov 2011 18:54:13', order: 5, user_id: 2)
