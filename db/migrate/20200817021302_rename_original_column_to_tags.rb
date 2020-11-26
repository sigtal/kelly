class RenameOriginalColumnToTags < ActiveRecord::Migration[6.0]
  def change
    rename_column :tags, :Original, :original
  end
end
