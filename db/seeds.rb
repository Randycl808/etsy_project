# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Seller.destroy_all
Buyer.destroy_all
Product.destroy_all

u1 = User.create(email:'test1@test.com', password:123456)
u2 = User.create(email:'test2@test.com', password:123456)

s1 = Seller.create(first_name:'Alex', last_name:'Garcia', email:'AlexG1@gmail.com')
s2 = Seller.create(first_name:'Kimberly', last_name:'Smith',  email:'KimberlySmith@gmail.com')

b1 = Buyer.create(first_name:'Ryan', last_name:'Rodriguez', max_price:100, category:'Jewelry', seller_id:s1.id)
b2 = Buyer.create(first_name:'Sara', last_name:'Hefner', max_price:150, category:'Shoes', seller_id:s2.id )

p1 = Product.create(price:25.00, description:'Earrings', category:'Jewelry', name: 'Purple Hoop Earrings', seller_id:s1.id )
p2 = Product.create(price:50.00, description:'Vans', category:'Shoes', name:'Black Old Skool', seller_id:s2.id)


puts " All Users: #{User.all.length}"
puts " All Sellers: #{Seller.all.length}"
puts " All Buyers: #{Buyer.all.length}"
puts " All Products: #{Product.all.length}"

  
