class AddToArticlesTwoColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :theme, :string
    add_column :articles, :image, :string
  end
end
