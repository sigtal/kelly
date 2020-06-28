class Admin < ApplicationRecord
  validate :check_number_of_employees
  validates :name, presence: true
  validates :email, presence: true
  has_secure_password

  private
    def check_number_of_employees
      if Admin.count >= 1
        errors.add(:admins, 'アカウントエラー')
      end
    end
end
