class CreateSettings < ActiveRecord::Migration[5.0]
  def change
    create_table :settings_pages do |t|
      t.string :name
      t.string :title
      t.string :subtitle
      t.string :banner

      t.timestamps
    end
  end
end
