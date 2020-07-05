class Illust < ApplicationRecord
  has_one_attached :avatar
  has_one_attached :fullimage
  validate :image_presence

  def image_presence
    errors.add(:avatar, 'サムネイル画像がありません') unless avatar.attached?
    errors.add(:fullimage, '画像がありません') unless fullimage.attached?
  end
end
