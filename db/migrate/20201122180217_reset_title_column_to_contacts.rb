class ResetTitleColumnToContacts < ActiveRecord::Migration[6.0]
  def change
    change_column :contacts, :title, :string
  end
end
