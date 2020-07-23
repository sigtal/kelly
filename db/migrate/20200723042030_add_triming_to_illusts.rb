class AddTrimingToIllusts < ActiveRecord::Migration[6.0]
  def change
    add_column :illusts, :thumb, :text
  end
end
