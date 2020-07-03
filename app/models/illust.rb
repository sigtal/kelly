class Illust < ApplicationRecord
  has_one_attached :avatar
  has_one_attached :fullimage
end
