class Score < ApplicationRecord
  validates :score, :player_id, presence: true

  belongs_to :player,
  foreign_key: :player_id,
  class_name: :User
  
end
