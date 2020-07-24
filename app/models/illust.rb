class Illust < ApplicationRecord
  has_one_attached :fullimage
  validate :image_presence
  validates :thumb, presence: true
  validates :name, presence: true

  def image_presence
    errors.add(:fullimage, '画像がありません') unless fullimage.attached?
  end
end
