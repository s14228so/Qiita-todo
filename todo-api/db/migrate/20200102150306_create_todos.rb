class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.boolean :is_done
      t.string :user_id
      t.timestamps
    end
  end
end
