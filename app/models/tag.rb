class Tag < ApplicationRecord
  validates :category, uniqueness: true
end
