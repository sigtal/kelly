class RenameBudgetColumnToContacts < ActiveRecord::Migration[6.0]
  def change
    rename_column :contacts, :budget, :title
  end
end
