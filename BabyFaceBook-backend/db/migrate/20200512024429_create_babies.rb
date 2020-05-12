class CreateBabies < ActiveRecord::Migration[6.0]
  def change
    create_table :babies do |t|
      t.string :name
      t.float :weight
      t.string :dob
      t.string :img
      t.integer :likes

      t.timestamps
    end
  end
end
