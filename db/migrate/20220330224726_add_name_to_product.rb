class AddNameToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :name, :string
  end
end
