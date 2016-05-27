class Page < ApplicationRecord

  validates :name, :content, presence: true
  validates :name, uniqueness: true

  has_one    :settings_page
  has_many   :children, class_name: "Page", foreign_key: "parent_id"
  belongs_to :parent,   class_name: "Page"

end
