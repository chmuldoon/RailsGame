class Comment < ApplicationRecord
  validates :post_id, :author_id, :content, presence: true
  validates :content, length: { minimum: 1 }, allow_nil: true 

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post
  def username
    return self.author.username
  end 

end
