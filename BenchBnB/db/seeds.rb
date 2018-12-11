# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.destroy_all

Bench.create(description: 'this is a bench' lat: 37.774138 long: -122.484619 )
Bench.create(description: 'this is another bench' lat: 37.778714 long: -122.467526)
