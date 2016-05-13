class SettingsPage < ApplicationRecord

  belongs_to :page

  validates :name, :title, :subtitle, :banner, presence: true
  validates :name, uniqueness: true

  mount_uploader :banner, PageBannerUploader
end
