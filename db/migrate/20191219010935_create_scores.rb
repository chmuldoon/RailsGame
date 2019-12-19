class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.integer :score, null: false
      t.integer :player_id, null: false

      t.timestamps
    end
  end
end
