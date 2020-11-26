class RemoveOriginalFromTags < ActiveRecord::Migration[6.0]
  def change
    remove_column :tags, :original
  end
end
