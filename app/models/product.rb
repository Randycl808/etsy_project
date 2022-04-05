class Product < ApplicationRecord
  belongs_to :seller

  def self.products
    select('products.id, name, price, description, category, seller_id, s.first_name, s.last_name, s.email')
    .joins('INNER JOIN sellers AS s
      ON s.id = products.seller_id')
  end

end
