class Hashtag < ApplicationRecord
  validates :content, presence: true
  has_many :post_hashtags
  has_many :posts, through: :post_hashtags

end
