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

#seller 1
s1 = Seller.create(first_name:'Alex', last_name:'Garcia', email:'AlexG1@gmail.com')
#seller 2
s2 = Seller.create(first_name:'Kimberly', last_name:'Smith',  email:'KimberlySmith@gmail.com')
#seller 3
s3 = Seller.create(first_name:'Mike', last_name:'Garcia',  email:'Mikey101@gmail.com')
#seller 4
s4 = Seller.create(first_name:'Steve', last_name:'Young',  email:'ScubaSteve@gmail.com')
#seller 5
s5 = Seller.create(first_name:'Tom', last_name:'Brady',  email:'TomBrady@gmail.com')

#buyer 1
b1 = Buyer.create(first_name:'Ryan', last_name:'Rodriguez', max_price:100, category:'Jewelry', seller_id:s1.id)
#buyer 2
b2 = Buyer.create(first_name:'Sara', last_name:'Hefner', max_price:150, category:'Shoes', seller_id:s2.id )

#seller 1 - products
p1 = Product.create(price:15.00, description:'Earrings', category:'Jewelry', name: 'Purple Hoop Earrings', seller_id:s1.id )
p2 = Product.create(price:18.00, description:'Earrings', category:'Jewelry', name: 'Black Stud Earrings', seller_id:s1.id )
p3 = Product.create(price:70.00, description:'Vans', category:'Shoes', name: 'White Old Skool', seller_id:s1.id )
p4 = Product.create(price:65.00, description:'Converse', category:'Shoes', name: 'Black Low Tops', seller_id:s1.id )
p5 = Product.create(price:35.00, description:'Hoodie', category:'Clothes', name: 'Grey Pull Over Hoodie', seller_id:s1.id )
p6 = Product.create(price:25.00, description:'T-Shirt', category:'Clothes', name: 'Blue Dodgers T-Shirt', seller_id:s1.id )
p7 = Product.create(price:1000.00, description:'Painting', category:'Arts & Crafts', name: 'Mona Lisa', seller_id:s1.id )
p8 = Product.create(price:250.00, description:'Painting', category:'Arts & Crafts', name: 'Blue Sky', seller_id:s1.id )

#seller 2 - products
p9 = Product.create(price:28.00, description:'Sandals', category:'Shoes', name:'Beach Sandals', seller_id:s2.id)
p11 = Product.create(price:1200.00, description:'Fitness Equipment', category:'Fitness Equipment', name:'Treadmill', seller_id:s2.id)
p12 = Product.create(price:45.00, description:'Dumbells', category:'Fitness Equipment', name:'25lbs Dumbells', seller_id:s2.id)
p13 = Product.create(price:500.00, description:'Bench Press', category:'Fitness Equipment', name:'Chest Bench Press', seller_id:s2.id)
p14 = Product.create(price:30.00, description:'Jump Rope', category:'Fitness Equipment', name:'2 Jump Ropes', seller_id:s2.id)
p15 = Product.create(price:15.00, description:'Shampoo', category:'Hair Product', name:'Coconut Shampoo', seller_id:s2.id)
p16 = Product.create(price:15.00, description:'Gel', category:'Hair Product', name:'Hair Gel', seller_id:s2.id)
p17 = Product.create(price:7.00, description:'Hair Accessories', category:'Hair Product', name:'Bows', seller_id:s2.id)

#seller 3 - products
p9 = Product.create(price:500.00, description:'Painting', category:'Arts & Crafts', name:'Las Vegas', seller_id:s3.id)
p11 = Product.create(price:120.00, description:'Art Table', category:'Arts & Crafts', name:'Etsy Art Table', seller_id:s3.id)
p12 = Product.create(price:215.00, description:'Black Ray-Bans', category:'Glasses', name:'Ray-Bans', seller_id:s3.id)
p13 = Product.create(price:215.00, description:'Grey Ray-Bans', category:'Glasses', name:'Ray-Bans', seller_id:s3.id)
p14 = Product.create(price:1030.00, description:'Diamond Ring', category:'Jewelry', name:'Cartier Diamond Ring', seller_id:s3.id)
p15 = Product.create(price:15000.00, description:'Diamond Braclet', category:'Jewelry', name:'Cartier Love Braclet', seller_id:s3.id)
p16 = Product.create(price:900.00, description:'Gold Chain', category:'Jewelry', name:'Gold Chain', seller_id:s3.id)
p17 = Product.create(price:7000.00, description:'Necklace', category:'Jewelry', name:'Cartier Necklace', seller_id:s3.id)




puts " All Users: #{User.all.length}"
puts " All Sellers: #{Seller.all.length}"
puts " All Buyers: #{Buyer.all.length}"
puts " All Products: #{Product.all.length}"

  
