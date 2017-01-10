class CreateBlocks < ActiveRecord::Migration[5.0]
  def change
    create_table :blocks do |t|
      t.integer :user_id
      t.integer :category_id
      t.datetime :due
      t.integer :priority, { default: 0 }

      t.timestamps
    end
  end
end
