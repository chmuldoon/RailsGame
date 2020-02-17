class EditUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bio, :text
    add_column :users, :name, :string
    remove_column :users, :wins, :integer, null: false, default: 0
    remove_column :users, :losses, :integer, null: false, default: 0


  end
end
