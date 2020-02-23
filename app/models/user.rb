class User < ApplicationRecord
  attr_reader :password
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  after_initialize :ensure_session_token
  has_one_attached :photo
  has_many :scores,
  foreign_key: :player_id,
  class_name: :Score
  has_many :posts,  
    foreign_key: :author_id,
    class_name: :Post
  has_many :likes,
    foreign_key: :user_id,
    class_name: :Like
  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment
  has_many :active_follows,  
    class_name: :Follow,
    foreign_key: :follower_id
  has_many :passive_follows, 
    class_name: :Follow,
    foreign_key: :target_id
  has_many :followings, 
    through: :active_follows,
    source: :target
 

  has_many :followers, 
    through: :passive_follows, 
    source: :follower


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
