class EditPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :likesarray, :integer, array: true, default: []
  end
end
