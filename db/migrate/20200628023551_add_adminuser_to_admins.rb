class AddAdminuserToAdmins < ActiveRecord::Migration[6.0]
  def change
    add_column :admins, :adminuser, :boolean, default: false
  end
end
