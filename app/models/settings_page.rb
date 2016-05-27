class SettingsPage < ApplicationRecord

  belongs_to :page

  validates :title, :subtitle, :banner, presence: true

  mount_uploader :banner, PageBannerUploader
end
