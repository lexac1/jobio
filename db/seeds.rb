# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'a', email: 'a@a.com', password: 'password')
User.create(username: 'lex', email: 'lex.ac1@gmail.com', password: 'password')


# Category 1
Category.create(name: 'Resume')
# Category 2
Category.create(name: 'Projects')
# Category 3
Category.create(name: 'Outreach')
# Category 4
Category.create(name: 'Web Presence')
# Category 5
Category.create(name: 'Drills')

# Careers Resources

# Setup Tasks

## Resume
Task.create(name: 'Canva', category_id: 1)
Task.create(name: 'Jobscan', category_id: 1)
Task.create(name: 'Creddle', category_id: 1)

## Outreach
Task.create(name: 'Meetup', category_id: 3)
Task.create(name: 'Yet another mail merge', category_id: 3)
Task.create(name: 'DBC Trello Board', category_id: 3)
Task.create(name: 'Streak CRM', category_id: 3)
Task.create(name: 'Full Contact (Chrome Ext.)', category_id: 3)
Task.create(name: 'Prophet (Chrome Ext.)', category_id: 3)
Task.create(name: 'Lead 411', category_id: 3)
Task.create(name: 'Boomerang email scheduling', category_id: 3)
Task.create(name: 'Crystal for Linkedin', category_id: 3)
Task.create(name: 'Rapportive', category_id: 3)
Task.create(name: 'SnapBird Tweet scanner email', category_id: 3)

## Web Presence
Task.create(name: 'Linkedin', category_id: 4)
Task.create(name: 'Facebook', category_id: 4)
Task.create(name: 'Angel List', category_id: 4)
Task.create(name: 'DBC Employ', category_id: 4)
Task.create(name: 'Personal Portfolio Site', category_id: 4)

## Technical Interview Prep / Algorithims
Task.create(name: 'DBC Funnel', category_id: 5)
Task.create(name: 'Codility', category_id: 5)
Task.create(name: 'Udacity UD513', category_id: 5)
Task.create(name: 'Codefights.com', category_id: 5)
Task.create(name: 'LeetCode.com', category_id: 5)
Task.create(name: 'HackerRank.com', category_id: 5)
Task.create(name: 'Exercism.io', category_id: 5)
Task.create(name: 'Toptal sorting algorithms', category_id: 5)
Task.create(name: 'Google Interview University', category_id: 5)



















Task.create(name: 'Outline', category_id: 1, user_id: 1, complete: false, priority: 1)
Task.create(name: 'Second Task', category_id: 2, user_id: 2, complete: false, priority: 2)
Task.create(name: 'Outline', category_id: 1, user_id: 1, complete: false, priority: 1)
Task.create(name: 'More Tasks', category_id: 1, user_id: 2, complete: false, priority: 2)

Block.create(category_id: 1, due: 'Sat, 19 Nov 2011 18:54:13', priority: 1, user_id: 1)
Block.create(category_id: 2, due: 'Sat, 19 Nov 2011 18:54:13', priority: 2, user_id: 1)
Block.create(category_id: 3, due: 'Sat, 19 Nov 2011 18:54:13', priority: 3, user_id: 1)
Block.create(category_id: 4, due: 'Sat, 19 Nov 2011 18:54:13', priority: 4, user_id: 1)
Block.create(category_id: 5, due: 'Sat, 19 Nov 2011 18:54:13', priority: 5, user_id: 1)


Block.create(category_id: 1, due: 'Sat, 19 Nov 2011 18:54:13', priority: 1, user_id: 2)
Block.create(category_id: 2, due: 'Sat, 19 Nov 2011 18:54:13', priority: 2, user_id: 2)
Block.create(category_id: 3, due: 'Sat, 19 Nov 2011 18:54:13', priority: 3, user_id: 2)
Block.create(category_id: 4, due: 'Sat, 19 Nov 2011 18:54:13', priority: 4, user_id: 2)
Block.create(category_id: 5, due: 'Sat, 19 Nov 2011 18:54:13', priority: 5, user_id: 2)
