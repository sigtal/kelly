class Contact < ApplicationRecord
  validates :email, presence: true ,length: { maximum: 255 },format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  validates :budget, presence: true ,length: { maximum: 255 }
  validates :content, presence: true
end
