class Contact < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true ,length: { maximum: 255 },format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  validates :title, presence: true ,length: { maximum: 255 }
  validates :content, presence: true
end
