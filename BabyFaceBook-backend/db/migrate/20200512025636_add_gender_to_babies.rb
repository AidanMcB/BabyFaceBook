class AddGenderToBabies < ActiveRecord::Migration[6.0]
  def change
    add_column :babies, :gender, :string
  end
end
