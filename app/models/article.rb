class Article < ApplicationRecord

  validates :title, :theme, :image, :body, presence: true

  mount_uploader :image, ArticleImageUploader
end
