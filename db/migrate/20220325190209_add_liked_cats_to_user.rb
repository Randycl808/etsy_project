class AddLikedCatsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :liked_cats, :text
  end
end
