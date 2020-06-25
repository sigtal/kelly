class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :email
      t.integer :budget
      t.text :content

      t.timestamps
    end
  end
end
