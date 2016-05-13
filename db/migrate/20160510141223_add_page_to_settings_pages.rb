class AddPageToSettingsPages < ActiveRecord::Migration[5.0]
  def change
    add_reference :settings_pages, :page, index: true
  end
end
