class AddTagOriginOrFanart < ActiveRecord::Migration[6.0]
  def change
    add_column :tags, :Original, :boolean
  end
end
