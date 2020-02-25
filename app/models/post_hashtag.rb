class PostHashtag < ApplicationRecord
  validates :hashtag_id, :post_id, presence: true
  belongs_to :hashtag
  belongs_to :post
end
