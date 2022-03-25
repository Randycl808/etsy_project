class CreateCats < ActiveRecord::Migration[6.1]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
      t.string :avatar

      t.timestamps
    end
  end
end
