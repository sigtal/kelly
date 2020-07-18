class AddCategoriesToIllusts < ActiveRecord::Migration[6.0]
  def change
    add_column :illusts, :categories, :string  
  end
end
